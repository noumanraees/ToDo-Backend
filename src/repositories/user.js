import bcrypt from "bcryptjs";
import User from "../schema/user.js";

export const userRepository = {
  async checkUserWithEmail(email) {
    return await User.findOne({ email });
  },

  async createUser(email, name, password) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      name,
      password: hashedPassword,
    });

    return await user.save();
  },

  async findById(id) {
    return await User.findById(id);
  },
};
