import { Error } from 'mongoose';
import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../models/user-model';

type RegisterBody = { email?: string, password?: string };

export const register: RequestHandler<unknown, unknown, RegisterBody> = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email) throw new Error('Privalomas el. paštas');
    if (!password) throw new Error('Privalomas slaptažodis');

    const hashedPassword = await bcrypt.hash(password, 5);

    const createdUser = await UserModel.create({ email, password: hashedPassword });

    res.status(201).json({
      user: createdUser
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

}