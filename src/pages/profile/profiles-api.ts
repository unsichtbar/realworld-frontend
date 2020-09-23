import HttpClient from "../../core/http/HttpClient";
import { ProfileModel } from "../../models/ProfileModel";
interface ProfileResponse {
  profile: ProfileModel;
}
export async function getProfile(profile: string): Promise<ProfileModel> {
  //    return HttpClient.get("/profiles/" + profile)

  const res: ProfileResponse = {
    profile: {
      username: "alex",
      bio: "I dont work here bucko",
      image: "",
      following: false,
    },
  };
  const mapped = mapToDomain(res);
  return await mapped;
}

function mapToDomain(res: ProfileResponse): ProfileModel {
  return res.profile;
}
