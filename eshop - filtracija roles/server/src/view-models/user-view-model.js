class UserViewModel {
  constructor(user) {
    const { SERVER_DOMAIN, SERVER_PORT } = process.env;
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.surname = user.surname;
    this.role = user.role;
    if (user.imgSrc) {
      this.imgSrc = `${SERVER_DOMAIN}:${SERVER_PORT}${user.imgSrc}`;
    }
  }
}

export default UserViewModel;