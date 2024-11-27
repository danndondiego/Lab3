import { User, UserService } from "../model/UserService";
import { LoginView } from "../view/LoginView";

export class LoginPresenter {
  constructor(private view: LoginView, private service: UserService) {
    this.view = view;
    this.service = service;
  }

  login(username: string, password: string) {
    const user: User = { username, password };

    this.service.login(user).then((result) => {
      if (result) {
        this.view.showSuccessMsg();
      } else {
        this.view.showErrorMsg();
      }
    });
  }
}