import axios from "axios";
import { urlOfBackEnd } from "./config";

export default axios.create({
    baseURL: urlOfBackEnd
})