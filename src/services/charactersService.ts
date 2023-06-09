
import { API } from "./souvenirInstance";

export const getCharacter = async () => {
  return await API.get("/character");
};