import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "34aedfa8e649450190988ede5ce518bd",
  },
});
