import { userService } from "../services/user.js";

export const userController = {
  async login(req, res) {
    return userService.login(req, res);
  },
  async register(req, res) {
    return userService.register(req, res);
  },

  async me(req, res) {
    return userService.me(req, res);
  },
};
