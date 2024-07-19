import style from './Vendas.module.css'
import { useLocation } from 'react-router';
function Vendas() {
    const location = useLocation();
    const data = location.state;

    return(
        <section className={style.vendas}>
            {data ? (
                <>
            <div className={style.card}>
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
        </>
        ) : (
            <p>No data passed</p>
        )}
        <div className={style.contat}>
            contatos vendedor
        </div>
        </section>
    )
}
export default Vendas