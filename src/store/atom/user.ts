import { atom } from "recoil";
import { UserData } from "../../components/SignIn";

const user = atom<UserData|null >({
  key: "user",
  default:null
});

export default user;
