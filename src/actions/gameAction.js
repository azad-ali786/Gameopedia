import axios from "axios"
import {popularGamesURL,newGamesURL,upcomingGamesURL} from "../api"


//Action Creators
export const loadGames = () => async (dispatch) => {
    //Fetching data
    const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    })
};
