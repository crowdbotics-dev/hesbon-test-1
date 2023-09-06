import axios from "axios"
const newConnector = axios.create({
  baseURL: "https://cbdash-pr-4833.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
