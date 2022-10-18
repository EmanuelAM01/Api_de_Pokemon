import axios from "axios";
import React, {useState} from "react";
import styles from "./PokemonButton.module.css";


const Pokemon = () =>{
    const [list, setList] = useState([])
    const [appear, setAppear] = useState(false)

    const showlist = (e) =>{
        e.preventDefault();
        appear === false?
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => response.data)
            .then(response => setList(response.results))
        :setList([])
        appear === false?setAppear(true):setAppear(false);
        console.log(appear);
    }

    return(
        <>
        <button onClick={showlist} className={styles.button}>Fetch Pokemon</button>
        <ol>
        {list !== []?
        list.map((pokemon,num) => { return (<li key={num}>{num+1}. {pokemon.name}</li>)}):
        null}
        </ol>
        </>
    )
}

export default Pokemon;