export { };

declare global {
  namespace TEST {
    type AAA = string;
  }
  namespace NodeJS {
    interface ProcessEnv {
      DB_CONNECTION_URL?: string,
      TOKEN_SECRET?: string,
    }
  }
}
