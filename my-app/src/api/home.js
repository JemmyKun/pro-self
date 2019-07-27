import axios from "axios";

const getHomeList = (param = {
    login_id: false,
    login_token: false,
    timestamp: new Date().getTime()
}) => axios.post("/api/Free/Home", param);

export default {
    getHomeList
}