import axios from "axios";

const axios_instance = axios.create(
    {
        baseURL: 'http://wefouragency.com:1000/api/',
        
        headers: {
            "Content-Type": 'application/json'
        }

    }
)



export const authAPI = {
    async postUserData(data:any) {
        //let response = await axios.get('http://gpouk.kbtoffice.co.uk/wp-json/wc/v2/orders?Consumer key:=ck_e984e93458c51e617a3b022599e89ac1a964f1d7&Consumer secret:=cs_7dca891e25faa153d7e3479725b7fcb878801655')
        return {
            status: 200,
            logined: true
        };
    }
}

export const ordersApi  = {
    async getOrders() {
        let response = await axios.get('http://wefouragency.com:1000/api/getAdressList')
        return {
            response
        };
    }
}

export const routesAPI  = {
    async getRoutes() {
        let response = await axios.get('http://wefouragency.com:1000/api/getActiveRoutes')
        console.log(response)
        return {
            response
        };
    },
    async addRoute(route: any) {
        
        let response = await axios_instance.post('addActiveRoute/', {
       ...route
          })
          console.log(response)
        return {
            response
        };
    },
    async deleteRoute(routeId: any) {
        
        let response = await axios_instance.get('removeActiveRoute/?id=&{routeId}')
         
        return {
            response
        };
    }
}