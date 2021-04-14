import React,{useEffect} from 'react';
import styled from 'styled-components'
import {motion} from "framer-motion"
const Game =({name,released,image})=> {
    return (
        <div>
            <h3>{name}</h3>
            <h3>{released}</h3>
            <img src={image} alt={name}/>
        </div>
    )
};
export default Game;