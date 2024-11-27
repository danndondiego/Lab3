import { UserService } from "../../model/UserService";
import { LoginPresenter } from "../../presenter/LoginPresenter";
import { LoginView } from "../LoginView";

class LoginScreen {
  constructor(private presenter: LoginPresenter) {
    this.presenter = presenter;
  }

  login(username: string, password: string) {
    const message = this.presenter.login(username, password);
    return message;
  }
}

const loginScreen = new LoginScreen(
  new LoginPresenter(new LoginView(), new UserService())
);