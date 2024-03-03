import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import JogadorList from './components/jogadorList';

function App() {

  const [jogadorList, setJogadorList ] = useState([{}]);
  const [jogadorNome, setjogadorNome ] = useState('');
  const [jogadorIdade, setjogadorIdade ] = useState('');
  const [jogadorTime, setjogadorTime ] = useState('');
  const [jogadorPosicao, setjogadorPosicao ] = useState('');
  const [jogadorId, setjogadorId ] = useState('');
  const [textBotao, setTextBotao] = useState('Cadastrar');
  
  

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/jogadores')
    .then(resposta=>{
      setJogadorList(resposta.data)
    }).catch(
      (error) => {console.log(error)}
    )
  });

 

  const adicionaJogador = (jogador) =>{
    axios.post('http://127.0.0.1:8000/jogadores', jogador)
    .then(resposta =>{
      alert(resposta)
    })
    .catch((error)=>
      console.log(error)
    )
  };

  const atualizaJogador = (jogador) =>{
    axios.put(`http://127.0.0.1:8000/jogadores/${jogadorId}`, jogador)
    .then(resposta=>{
      alert('Jogador atualizado com sucesso!!!')
    }).catch((error) =>{
      console.log(error)
    })
  };

  const adicionaAtualizaJogador= ()=>{
    const jogador = {
      'nome_jogador': jogadorNome,
      'jogador_idade': jogadorIdade,
      'jogador_time': jogadorTime,
      'posicao': jogadorPosicao
    }
    if(jogadorId != ''){
      atualizaJogador(jogador)
    }else{
      adicionaJogador(jogador)
    } 
  };

  return (
    <div className="container">
      <div className="mt-3 justify-content-center aligs-items-center mx-auto" style={{"width": "70vw", "backgroundColor": "#ffffff"}}>
        <h2 className='text-center text-width bg-success card mb-1'>Gerenciamento de Jogadores</h2>
        <h6 className='card text-center text-white bg-success mb-1 pb-1'>Informações de Jogadores</h6>

        <div className="card-body text-center">
          <h5 className='card text-center text-white bg-dark pb-1'>Cadastro de Jogadores</h5>
          <span className='card-text'>
              <input 
              onChange={evento => setjogadorNome(evento.target.value)}
              value={jogadorNome}
              className='mb-2 form-control' placeholder='Informe o nome' />
              <input 
              onChange={evento => setjogadorIdade(evento.target.value)}
              value={jogadorIdade}
              className='mb-2 form-control' placeholder='Informe a idade' />
              <input 
              onChange={evento => setjogadorTime(evento.target.value)}
              value={jogadorTime}
              className='mb-2 form-control' placeholder='Informe o Time' />
              <input 
              onChange={evento => setjogadorPosicao(evento.target.value)}
              value={jogadorPosicao}
              className='mb-2 form-control' placeholder='Informe a posicao' />
              <div className='d-grid gap-2'>
                <button 
                onClick={adicionaAtualizaJogador}
                className='btn btn-outline-success mb-4 btn-block btn-large'>
                  {textBotao}
                </button>
              </div>
          </span>
          <h5 className='card text-center text-white bg-dark pb-1'>Lista de Jogadores</h5>
          <div>
            <JogadorList jogadorList = {jogadorList}
            
            setjogadorId = {setjogadorId}
            setjogadorNome = {setjogadorNome}
            setjogadorIdade = {setjogadorIdade}
            setjogadorTime = {setjogadorTime}
            setjogadorPosicao = {setjogadorPosicao}
            setTextBotao = {setTextBotao}
            
            />
          </div>
        </div>
        <h5  className='text-center text-white bg-success mb-1 pb-1'>&copy; CodeTI 2023</h5>
      </div>
    </div>
  );
}

export default App;

