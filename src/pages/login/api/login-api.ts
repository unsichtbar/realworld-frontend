import { UserModel } from "../../../models/UserModel";

export const uri = "/users/login";

export interface PostLoginPayload {
  user: {
    email: string;
    password: string;
  };
}
export interface LoginResponse {
  user: UserModel;
}

export async function postLogin(vars: {
  username: string;
  password: string;
}): Promise<LoginResponse> {
  return await {
    user: {
      email: "foo@example.com",
      token: "ABC123",
      username: "alex",
      bio: "Ich komme aus Amerika.",
    },
  };
}
