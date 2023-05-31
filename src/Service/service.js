import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get("https://646f0ae509ff19b1208674bc.mockapi.io/product");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export default {
  fetchData,
};
