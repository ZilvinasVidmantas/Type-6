import { Error } from 'mongoose';
import { RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';
import UserModel, { UserProps } from '../models/user-model';
import createUserViewModel, { UserViewModel } from '../view-model-creators/create-user-view-model';

type AuthResponseBody = {
  user: UserViewModel,
  token: string,
} | ErrorResponseBody;

export const checkEmail: RequestHandler<
  unknown,
  { valid: true } | ErrorResponseBody,
  unknown,
  { email?: string }
> = async (req, res) => {
  const { email } = req.query;

  try {
    if (email === undefined) {
      throw new Error('Reikalingas paštas patikrinimui');
    }

    const userDoc = await UserModel.findOne({ email });
    if (userDoc !== null) {
      throw new Error('Paštas užimtas');
    }

    res.status(200).json({
      valid: true,
    });
  } catch (error) {
    res.status(400).json({
      error: error instanceof Error ? error.message : 'Serverio klaida atpažįstant vartotoją',
    });
  }
};

export const login: RequestHandler<
  unknown,
  AuthResponseBody,
  Partial<UserProps>
> = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email) throw new Error('Privalomas el. paštas');
    if (!password) throw new Error('Privalomas slaptažodis');

    const userDoc = await UserModel.findOne({ email });
    if (userDoc === null) throw new Error(`Vartotojas su paštu '${email}' nerastas`);

    const passwordIsCorrect = bcrypt.compareSync(password, userDoc.password);
    if (!passwordIsCorrect) throw new Error('Slaptažodis neteisingas');
    const token = jwt.sign({ email, role: userDoc.role }, config.token.secret);

    res.status(200).json({
      user: createUserViewModel(userDoc),
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(400).json({
      error: error instanceof Error ? error.message : 'Serverio klaida prisijungiant',
    });
  }
};

export const register: RequestHandler<
  unknown,
  AuthResponseBody,
  Partial<UserProps>
> = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email) throw new Error('Privalomas el. paštas');
    if (!password) throw new Error('Privalomas slaptažodis');

    const hashedPassword = bcrypt.hashSync(password, 5);
    const userDoc = await UserModel.create({ email, password: hashedPassword });

    const token = jwt.sign({ email, role: userDoc.role }, config.token.secret);

    res.status(201).json({
      user: createUserViewModel(userDoc),
      token: `Bearer ${token}`,
    });
  } catch (error) {
    let message = 'Serverio klaida registruojantis';

    if (error instanceof Error.ValidationError) {
      if (error.errors.email) {
        message = 'Toks paštas jau yra';
      }
    } else if (error instanceof Error) {
      message = error.message;
    }
    res.status(400).json({
      error: message,
    });
  }
};

export const authenticate: RequestHandler<
  unknown,
  AuthResponseBody
> = async (req, res) => {
  console.log('-------------------');
  console.log('AUTHENTICATE');
  console.log('-------------------');
  try {
    if (req.tokenData === undefined) {
      throw new Error('Užšifruotuose duomenyse nėra vartotojo duomenų');
    }
    const { email, token } = req.tokenData;
    const userDoc = await UserModel.findOne({ email });

    if (userDoc === null) {
      throw new Error(`Vartotojas nerastas su tokiu paštu '${email}'`);
    }
    const user = createUserViewModel(userDoc);

    // Čia galėtų būti aprašyti veiksmai, kurie pratęsia token'o gyvavimo laiką
    // Kitaip tariant, galite iš naujo sukurti naują token'ą su userDoc duomenimis

    res.status(200).json({
      user,
      token,
    });
  } catch (error) {
    res.status(400).json({
      error: error instanceof Error ? error.message : 'Serverio klaida atpažįstant vartotoją',
    });
  }
};

export const updateUser: RequestHandler = async (req, res) => {
  // Dabar reikia įgalinti po pertraukos:
  /*
    9:30
    0. multer bibliotekos įrašymas
    1. Nuotraukos išsaugojimas į serverio failų sistemą
    2. Nuotraukos kelio iki išsaugotos nuotraukos formavimas
    3. Duomenų atnaujinimas vartotojo modelį
    4. Pagal pakitusius vartotojo duomenis, naujo token'o formavimas
  */

  console.log('----------------------');
  console.log('Body');
  console.log(req.body);
  console.log('----------------------');
  console.log('File');
  console.log(req.file);
  console.log('----------------------');
  try {
    if (req.tokenData === undefined) {
      throw new Error('Neteisingi autentifikacijos duomenys');
    }
    const { email, token } = req.tokenData;

    const userDoc = await UserModel.findOne({ email });

    if (userDoc === null) {
      throw new Error(`Vartotojas nerastas su tokiu paštu '${email}'`);
    }

    res.status(200).json({
      user: createUserViewModel(userDoc),
      token,
    });
  } catch (error) {
    res.status(400).json({
      error: error instanceof Error ? error.message : 'Serverio klaida atpažįstant vartotoją',
    });
  }
};
