import axios from "axios";

const dataSource = axios.create({
  baseURL: "http://localhost:5000",
});

export default dataSource;
