import React from "react";
import axios from "axios";


    function Jogador(props){
        const excluiJogador = (jogadorId) => {
            axios.delete(`http://127.0.0.1:8000/jogadores/${jogadorId}`)
            .then(
                respost =>{
                    alert('Jogador removido com sucesso')
                }
            )
        }
        const editaJogador = (jogador)=>{
            props.setjogadorId(jogador.id);
            props.setjogadorNome(jogador.nome_jogador);
            props.setjogadorIdade(jogador.jogador_idade);
            props.setjogadorTime(jogador.jogador_time);
            props.setjogadorPosicao(jogador.posicao);
            props.setTextBotao("Atualizar")
        }
        return(
            <div>
                <p>
                    <span className="fw-bold">
                        {props.jogador.nome_jogador} - {props.jogador.jogador_idade} - {props.jogador.jogador_time} - {props.jogador.posicao}

                    </span>
                    <button 
                        onClick={()=> editaJogador(props.jogador)}
                        className="btn btn-sm">
                        <span className="badge rounded-pill bg-info">Editar</span>
                    </button>
                    <button 
                        onClick={()=> excluiJogador(props.jogador.id)} 
                        className="btn btn-sm">
                        <span className="badge rounded-pill bg-danger">x</span>
                    </button>
                </p>
            </div>
        )
    }


export default Jogador;