import {useParams} from 'react-router-dom';

function Produto(){

    const { id } = useParams(); 
    return(
        <div>
            <h2> pagina detalhe de produto </h2>
            <span> Meu Produto tem id = {id}</span>
        </div>
    );
}
export default Produto;