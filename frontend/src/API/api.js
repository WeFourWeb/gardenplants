import axios from "axios";

export const authAPI = {
    async postUserData(data) {
        //let response = await axios.get('http://gpouk.kbtoffice.co.uk/wp-json/wc/v2/orders?Consumer key:=ck_e984e93458c51e617a3b022599e89ac1a964f1d7&Consumer secret:=cs_7dca891e25faa153d7e3479725b7fcb878801655')
        return {
            status: 200,
            logined: true
        };
    }
}

export const ordersApi  = {
    async getOrders() {
        let response = await axios.get('http://gpouk.kbtoffice.co.uk/wp-json/wc/v2/orders?Consumer key:=ck_e984e93458c51e617a3b022599e89ac1a964f1d7&Consumer secret:=cs_7dca891e25faa153d7e3479725b7fcb878801655')
        return {
            response
        };
    }
}



