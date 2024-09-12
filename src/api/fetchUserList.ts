import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const fetchUserList = async () => {
  try {
    const res = await axios.get("/users");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchUserList;
