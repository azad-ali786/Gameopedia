import React,{useEffect} from 'react';
import styled from 'styled-components'
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
//Redux
import {useDispatch} from 'react-redux'
import {loadDetails} from '../actions/detailAction'
const Game =({name,released,image,id})=> {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetails(id));
  };
    return (
        <StyledGame  onClick={loadDetailHandler}>
          <Link to={`/game/${id}`}>
            <h3>{name}</h3>
            <h3>{released}</h3>
            <img src={image} alt={name}/>
            </Link>
            </StyledGame>
    )
};
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }`;
export default Game;