import { Error } from 'mongoose';
import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user-model';
import config from '../config';

type AuthBody = { email?: string, password?: string };
/*
  RequestHandler
    * params - tai ką nurodote route'e, pvz.: '/:id'
    * res.body - tai ką išsiunčiate(mūsų atveju tai ką siunčiate req.json(<TIPAS>))
    * req.body - tai ką gaunate į req.body savybę
    * req.query - tai ką perduodame url, pvz.: "/user?sort=name&page=2&limit=14"

  Jeigu norite perduoti 3 parametrą, bet nereikia perduoti 1 ir 2, tuomet galite naudoti tipą
  <unknown>, kad praleisti 1 ir 2 bendrinių parametrų nurodymus.
*/

export const login: RequestHandler<unknown, unknown, AuthBody> = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email) throw new Error('Privalomas el. paštas');
    if (!password) throw new Error('Privalomas slaptažodis');

    const user = await UserModel.findOne({ email });

    if (user === null) throw new Error(`Vartotojas su paštu '${email}' nerastas`);

    const passwordIsCorrect = bcrypt.compareSync(password, user.password);

    if (!passwordIsCorrect) throw new Error('Slaptažodis neteisingas');
    const token = jwt.sign({ email, role: user.role }, config.token.secret);

    res.status(200).json({
      user,
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(400).json({
      error: error instanceof Error ? error.message : 'Serverio klaida prisijungiant',
    });
  }
};

export const register: RequestHandler<unknown, unknown, AuthBody> = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email) throw new Error('Privalomas el. paštas');
    if (!password) throw new Error('Privalomas slaptažodis');

    const hashedPassword = bcrypt.hashSync(password, 5);
    const createdUser = await UserModel.create({ email, password: hashedPassword });

    const token = jwt.sign({ email, role: createdUser.role }, config.token.secret);

    res.status(201).json({
      user: createdUser,
      token: `Bearer ${token}`,
    });
  } catch (error) {
    let message;

    if (error instanceof Error.ValidationError) {
      if (error.errors.email) {
        message = 'Toks paštas jau yra';
      }
    } else if (error instanceof Error) {
      message = error.message;
    } else {
      message = 'Serverio klaida registruojantis';
    }
    res.status(400).json({
      error: message,
    });
  }
};
