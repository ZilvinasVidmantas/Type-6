import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

type DecodedInfo = { email: string, iat?: number };

const authMiddleware: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;
  let errStatus: number = 401;
  try {

    if (authHeader === undefined) throw new Error('Reikalingas prisijungimas');

    const token = authHeader.split(' ')[1];
    if (token === undefined) throw new Error('Klaidingi vartotojo atpažinimo duomenys');

    if (process.env.TOKEN_SECRET === undefined) {
      errStatus = 500;
      throw new Error('Serverio klaida');
    }

    const decodedInfo = jwt.verify(token, process.env.TOKEN_SECRET) as DecodedInfo;

    req.body.authUserEmail = decodedInfo.email;

    next();
  } catch (error) {
    res.status(errStatus).json({
      error: error instanceof Error ? error.message : 'Klaida atpažįstant vartotoją',
    });
  }
}

export default authMiddleware;