import axios from "axios"
import {
  NEW_CONNECTOR_TEST_USERNAME,
  NEW_CONNECTOR_TEST_PASSWORD
} from "react-native-dotenv"
const newConnectorTest = axios.create({
  baseURL: "https://cbdash-pr-4833.herokuapp.com/dashboard/app/1/connectors",
  auth: {
    username: NEW_CONNECTOR_TEST_USERNAME,
    password: NEW_CONNECTOR_TEST_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
