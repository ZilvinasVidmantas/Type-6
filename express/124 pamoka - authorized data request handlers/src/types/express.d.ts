declare global {
  declare namespace Express {
    export interface Request {
      tokenData?: {
        email: string,
        role: string,
      },
      authUser: any
    }
  }

}
export { };
