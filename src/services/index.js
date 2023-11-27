import { baseUrl } from "../constant/baseUrl";
import axios from "axios";

export const getJokers = async () => {
  try {
    const url = baseUrl + "/search?limit=10";
    const res = await axios({
      headers: { Accept: "application/json" },
      metod: "GET",
      url,
    });
    return res;
  } catch (err) {
    console.log("err", err);
  }
};
