import style from './Card.module.css'
import {useNavigate} from 'react-router-dom'
function Card({img, preco, tamanho}){
    const navigate = useNavigate();

    const handleClick = () => {
        // Informações a serem passadas para a próxima página
        const data = { img: img, preco: preco, tamanho: tamanho};

        // Redireciona para a página de Vendas
        navigate('/sale', { state: data });
    };

    return(
        <div className={style.card} onClick={handleClick}>
            <div className={style.div_img}><img src={img} alt="Blusas Femininas Masculinas e Insfantil"/></div>
            
            <div className={style.price}>
                <div>
                <p className={style.valor}>R$</p>
                <p className={style.valor}>{preco}</p>
                </div>
                <div>
                    <p className={style.tamanho}>{tamanho}</p>
                </div>
            </div>
            

        </div>
    )
}
export default Card