import { Profile, User } from "next-auth";

export type RegisterForm = {
  username: string;
  phoneNumber: string;
  user?: User;
  profile?: Profile;
};
