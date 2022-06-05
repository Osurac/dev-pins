import axios from "axios";
const API_KEY = 'AIzaSyDAOV8zOt44L8k9JyW8ZI-oZZmy8a8Qy1c';

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: API_KEY
    }
})

