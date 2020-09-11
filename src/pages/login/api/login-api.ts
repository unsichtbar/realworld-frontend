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
const mapToModel = (api: LoginResponse) => api.user;
export async function postLogin(vars: {
  username: string;
  password: string;
}): Promise<UserModel> {
  const res = {
    user: {
      email: "foo@example.com",
      token: "ABC123",
      username: "alex",
      bio: "Ich komme aus Amerika.",
    },
  };
  return await mapToModel(res);
}
