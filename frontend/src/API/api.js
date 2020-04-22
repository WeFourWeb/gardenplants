import axios from "axios";

export const authAPI = {
    async postUserData(data) {
        let response = await axios.get('http://gpouk.kbtoffice.co.uk/wp-json/wc/v2/orders?Consumer key:=ck_e984e93458c51e617a3b022599e89ac1a964f1d7')
        return {
            response
        };
    }
}