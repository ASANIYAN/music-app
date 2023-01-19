import { useQuery } from "react-query";
import { headers } from '../api-headers';


const fetchTopReleases = async () => {
    const options = {
      method: 'GET',
      headers: headers,
    };
    
    const res = await fetch('https://genius-song-lyrics1.p.rapidapi.com/chart/albums/?per_page=10&page=1', options);
    return res.json();
}

const useFetchTopReleases = () => {
    return useQuery('releases', fetchTopReleases
    , { 
        refetchOnMount: false, 
        refetchOnWindowFocus: false 
      }
    );
}
 
export default useFetchTopReleases;