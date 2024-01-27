import {Link} from 'react-router-dom';

function Home(){
    return(
      <div>
        <h1>Bem-vindo a pagina Home!</h1>
        <span>Sujeito Programador.</span>
        <br/>

        <Link to="/sobre">Sobre</Link>
      </div>
    );
  }
  
  export default Home;