import RoutesApp  from './routes';

function App(){
  return(
    <RoutesApp/>
  );
}

export default App;

















/*
//ADICIONANDO UM ITEM NUMA LISTA
import React, {useState} from 'react';

function App(){

  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React Hooks'
  ]);

  const [input, setInput] = useState('');

  function handleAdd(){
    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Adicionar</button>

    </div>
  );
}
export default App;
*/



/*
import React, {Component} from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: 'Matheus',
      contador: 0
    };
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar(){
    let state = this.state;
    state.contador += 1;
    this.setState(state);
  }

  diminuir(){
    let state = this.state;
    if(this.state.contador === 0){
      alert('Chegou a zero!');
      return;
    }
    state.contador -= 1;
    this.setState(state);
  }

  render(){
    return(
      <div>
        <h1>Contador</h1>
        <h3>
          <button onClick={this.diminuir}>-</button>
            {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h3>
      </div>
    );
  }
}

export default App;
*/