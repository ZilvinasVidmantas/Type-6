declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_CONNECTION_URL: string | undefined
    }
  }
}

export { }