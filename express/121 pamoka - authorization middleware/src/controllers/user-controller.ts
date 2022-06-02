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
    res.status(400).json({
      error: error instanceof Error ? error.message : 'Serverio klaida registruojantis',
    });
  }

}