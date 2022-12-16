import axios from "axios";

export function getTrendingMovies(movieKey, api,setTrendingMovies) {
  axios.get(`${api}/trending/movie/week?api_key=${movieKey}`)
  .then((res => setTrendingMovies(res.data)))
  .catch(err => console.log(err))
  
}
