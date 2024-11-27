export type User = {
    username: string;
    password: string;
  };
  
  export class UserService {
    async login(user: User): Promise<boolean> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (user.username === "admin" && user.password === "admin") {
            resolve(true);
          } else {
            resolve(false);
          }
        }, 1000);
      });
    }
  }