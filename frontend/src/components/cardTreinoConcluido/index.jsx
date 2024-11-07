import { Link } from 'react-router-dom';
import './index.scss';

function CardTreinoConcluido(props) {
    return (

       
       
        <Link className='comp-card-treino-concluido' to={`/clienteConcluido/${props.item.id_cliente}`}>
            <div className='cartao'>
                {props.item.perfil ? (
                    <img src={props.item.perfil} alt="Foto do Cliente"/>
                ) : (
                    <p>Imagem não disponível</p>
                )}
                <div className='infosCliente'>
                    <div>
                        <h3>Nome do Cliente:</h3>
                        <h3>{props.item.nome}</h3>
                    </div>
                    <div>
                        <h3>Data da Avaliação:</h3>
                        <h3>{new Date(props.item.dataAvaliacao).toLocaleString()}</h3>
                    </div>
                    <div>
                        <h3>Data da Reavaliação:</h3>
                        <h3>{new Date(props.item.dataReavaliacao).toLocaleString()}</h3>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CardTreinoConcluido;