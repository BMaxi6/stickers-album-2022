import axios from "axios";

const baseURL = "https://warm-shore-70526.herokuapp.com/";

export const getStickers = async () => {
  return (await axios.get(baseURL, {
    headers: {"Access-Control-Allow-Headers": "*"}
  })).data;
}

export const saveStickers = async (stickersState) => {
  return (await axios.post(baseURL + 'save',stickersState))
}
