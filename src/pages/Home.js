import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {loadGames} from "../actions/gameAction"
import Game from '../components/Game'
import styled from 'styled-components'
import {motion} from "framer-motion"
const Home = () => {
    //FEtch Games for
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(loadGames());
    },[dispatch]);
    //Getting data from initState
    const {popular,newGames,upcoming} = useSelector(state => state.games);
    console.log(upcoming);
    return(
        <GameList>
            <h2>Upcoming games</h2>
            { upcoming && (
                    upcoming.map((game) => (       
                           <Game name={game.name} released={game.released} id={game.id} key={game.id} image={game.background_image}/>
                        ) )
                )}
        </GameList>
    )
};
const GameList = styled(motion.div)`
`;
const Games = styled(motion.div)``;
export default Home;