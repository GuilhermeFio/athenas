import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../../components/abasMenu';
import CardTreinoMarcado from '../../components/cardTreinoMarcado';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function HorarioTreinos() {
    const [token, setToken] = useState(null);
    const [listaTreinos, setListaTreinos] = useState([]);
    const navigate = useNavigate();


    useEffect(() =>{
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)
        
        if(usu == 'undefined' || usu == 'null' || !usu) {
            navigate('/loginUsuario')
        }
    }, [])

    useEffect(() => {
        if (token) {
            consultar();
        }
    }, [token]);

    async function consultar() {
       
            const url = `http://4.172.207.208:5008/treinos?x-access-token=${token}`;
            const resp = await axios.get(url);
            setListaTreinos(resp.data);
           
    }

    

    return (
        <div className="pagina-horarios-treinos">
            <Menu />
            <div className="secaomae">
                <div className="secao1">
                    <h1>TREINOS MARCADOS</h1>
                    <div className="irAddTreino">
                        <h2>Adicionar Novo Treino</h2>
                        <Link to={'/novoTreino'}>
                            <img className='add' src='/assets/images/adicionar.png' alt="Adicionar Treino"/>
                        </Link>
                    </div>
                </div>
                <div className="secaotreinos">
                    <div className="treinosMarcados">
                        {listaTreinos.length === 0 ? (
                            <p className='cond'>Os treinos marcados aparecerão aqui.</p>
                        ) : (
                            listaTreinos.map(item => (
                                <CardTreinoMarcado item={item} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
