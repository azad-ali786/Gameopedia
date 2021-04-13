import React,{useEffect} from 'react'
import {useDispatch} from "react-redux"
import {loadGames} from "../actions/gameAction"

const Home = () => {
    //FEtch Games for
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(loadGames());
    });
    return(
    <h1>Azad</h1>
    )
}
export default Home;