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
        let result = await http.get("/stories?user_id=1")
        return result.data;
    },
    async likeStory(story_id,user_id){
        let result = await http.post(`/stories/${story_id}/like/${user_id}`)
        return result.data;
    },
    async unlikeStory(story_id,user_id){
        let result = await http.delete(`/stories/${story_id}/unlike/${user_id}`)
        return result.data;
    },
    async commentStory(story_id,user_id,comment,quote_id=0){
        let result = await http.post(`/stories/${story_id}/comments/${user_id}`,{comment})
        return result.data;
    },
    async getCommentStory(story_id,user_id){
        let result = await http.get(`/stories/${story_id}/comments`)
        return result.data;
    }

}



export default Http;