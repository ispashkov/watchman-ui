import Axios from "axios";

export default Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    common: {
      'Content-Type': 'application/json'
    }
  }
})
