import axios from "axios";

let http  = axios.create({
    baseURL: `https://admin.thesimstree.com/api`,
    timeout: 5000,
    headers: {
        Authorization: `Bearer mI2txRLHO8NDWXsi3E2e8d3NWhAfNOyv6igfAQJG60c09d6f`
    }

})

const Http = {
    async getList(user_id){
        let result = await http.get("/stories")
        return result.data;
    },

}



export default Http;