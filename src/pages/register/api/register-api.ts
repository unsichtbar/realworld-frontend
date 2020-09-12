import { UserModel } from "../../../models/UserModel";
import HttpClient, { ApiResponse } from "../../../core/http/HttpClient";
const uri = "/users";

interface PostRegisterPayload {
  user: {
    email: string;
    username: string;
    password: string;
  };
}
interface RegisterResponse extends ApiResponse {
  user: UserModel;
}

const mapToModel = (api: RegisterResponse) => api.user;
export async function postRegister({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}): Promise<UserModel> {
  const body: PostRegisterPayload = {
    user: {
      username,
      email,
      password,
    },
  };
  const res = await HttpClient.post<RegisterResponse>(uri, body);
  return await mapToModel(res);
}
