import { useQuery } from "react-query";
import { headers } from '../api-headers';


const fetchSongRecommendations = async () => {
    const options = {
      method: 'GET',
      headers: headers,
    };
    const res = await fetch('https://genius-song-lyrics1.p.rapidapi.com/song/recommendations/?id=2396871', options)
    return res.json();
}

const useFetchRecommendations = () => {
    return useQuery('recommendations', fetchSongRecommendations
    , { 
        refetchOnMount: false, 
        refetchOnWindowFocus: false 
      }
      );
}
 
export default useFetchRecommendations;