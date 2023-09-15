import axios from "axios";
import Config from "react-native-config";
import { CLIENT_API } from "@env";
export default axios.create({
  baseURL:  (CLIENT_API) ,
});
