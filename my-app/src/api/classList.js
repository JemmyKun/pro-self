import axios from "axios";

const getPackageList = (param = {
    page_num: 1,
    page_size: 10,
    login_id: false,
    login_token: false
}) => axios.post("/api/Free/PackageList", param);

const getOrderList = () => axios.get("/api/user/order/list");

export default {
    getPackageList,
    getOrderList
}