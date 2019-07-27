import axios from "axios";

const getLessonById = (param = {
    package_id: 'a1598313dd5c4cce842373ba3e278844',
    login_id: false,
    login_token: false,
}) => axios.post("/api/Free/Lesson", param);

const getLessonData = (param = {
    id: "06b4dabd7c35443c8d8a681db47dc005",
    type: 2,
    login_id: false,
    login_token: false
}) => axios.post("/api/Free/LessonData", param);

export default {
    getLessonById,
    getLessonData
}