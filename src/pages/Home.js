import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {loadGames} from "../actions/gameAction"
import Game from '../components/Game'
import styled from 'styled-components'
import {motion} from "framer-motion"
import GameDetail from "../components/GameDetail";
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
           <GameDetail />
            <h2>Upcoming games</h2>
            <Games>
            { upcoming && (
                    upcoming.map((game) => (       
                           <Game name={game.name} released={game.released} id={game.id} key={game.id} image={game.background_image}/>
                        ) )
                )}
            </Games>
            <h2>Popular games</h2>
            <Games>
            { popular && (
                    popular.map((game) => (       
                           <Game name={game.name} released={game.released} id={game.id} key={game.id} image={game.background_image}/>
                        ) )
                )}
            </Games>
            <h2>New games</h2>
            <Games>
            { newGames && (
                    newGames.map((game) => (       
                           <Game name={game.name} released={game.released} id={game.id} key={game.id} image={game.background_image}/>
                        ) )
                )}
            </Games>
        </GameList>
    )
};
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2{
      padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  padding-bottom:2rem;
`;
export default Home;