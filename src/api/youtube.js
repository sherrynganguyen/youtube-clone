import axios from 'axios';
const YOUTUBE_API = process.env.YOUTUBE_API
export default axios.create({
  baseURL: 'http://www/googlepapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: YOUTUBE_API
  }
})