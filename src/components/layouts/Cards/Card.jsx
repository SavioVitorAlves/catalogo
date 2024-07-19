import style from './Card.module.css'
import {useNavigate} from 'react-router-dom'
function Card({img, preco, tamanho1, tamanho2, tamanho3, tamanho4}){
    const navigate = useNavigate();

    const handleClick = () => {
        // Informações a serem passadas para a próxima página
        const data = { img: img, preco: preco, tamanho1: tamanho1, tamanho2: tamanho2, tamanho3: tamanho3, tamanho4: tamanho4};

        // Redireciona para a página de Vendas
        navigate('/sale', { state: data });
    };

    return(
        <div className={style.card} onClick={handleClick}>
            <div className={style.div_img}></div>
            
            <div className={style.price}>
                <div>
                <p className={style.valor}>R$</p>
                <p className={style.valor}>34,99</p>
                </div>
                <div>
                    <p className={style.tamanho}>P</p>
                    <p className={style.tamanho}>M</p>
                    <p className={style.tamanho}>G</p>
                </div>
            </div>
            

        </div>
    )
}
export default Card