import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    // method: 'GET',
    // url: 'https://youtube-v31.p.rapidapi.com/search',
    // url: BASE_URL,
    params: {
    //   relatedToVideoId: '7ghhRHRP6t4',
    //   part: 'id,snippet',
    //   type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'cf135ccee6mshf15e5afc400adddp11ae31jsnebf03eeb4f0f',
    //   process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)

    return data
  }