import { baseUrl } from "../constant/baseUrl";
import axios from "axios";

export const getJokers = async () => {
  try {
    const url = baseUrl + "/search?limit=10";
    const res = await axios({ metod: "GET", url });
    return res;
  } catch (err) {
    console.log("err", err);
  }
};
