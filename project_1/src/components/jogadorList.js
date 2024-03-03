import React from "react";
import Jogador from "./jogador";

function JogadorList(props){
    return(
        <div>
            <ul>
                {
                    props.jogadorList.map(
                        (jogador, indice) => {
                            return (<Jogador
                                 jogador={jogador} key={indice} 
                                 setjogadorId = {props.setjogadorId}
                                setjogadorNome = {props.setjogadorNome}
                                setjogadorIdade = {props.setjogadorIdade}
                                setjogadorTime = {props.setjogadorTime}
                                setjogadorPosicao = {props.setjogadorPosicao}
                                setTextBotao = {props.setTextBotao}
                                 />)
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default JogadorList;