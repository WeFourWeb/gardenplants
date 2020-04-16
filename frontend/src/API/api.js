import axios from "axios";

export const authAPI = {
    async postUserData(data) {
        // let response = await axios.post()
        return {
            status: 200,
            logined: true
        };
    }
}