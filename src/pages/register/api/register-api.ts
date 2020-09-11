import { UserModel } from "../../../models/UserModel";

const uri = "/users/login";

interface PostRegisterPayload {
  user: {
    email: string;
    password: string;
  };
}
interface RegisterResponse {
  user: UserModel;
}
const mapToModel = (api: RegisterResponse) => api.user;
export async function postRegister(vars: {
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
