declare global {
  declare namespace Express {
    export interface Request {
      authUser?: {
        email: string,
        role: string,
      }
    }
  }

}
export { };
