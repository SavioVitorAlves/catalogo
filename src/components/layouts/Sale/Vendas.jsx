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
            <div className={style.div_img}><img src={data.img} alt="" /></div>
            
            <div className={style.price}>
                <div>
                <p className={style.valor}>R$</p>
                <p className={style.valor}>{data.preco}</p>
                </div>
                <div>
                    <p className={style.tamanho}>{data.tamanho}</p>
                </div>
            </div>
        </div>
        </>
        ) : (
            <p>No data passed</p>
        )}
        <div className={style.contat}>
            <p>Contatos Vendedores</p>
            <div className={style.vendedores}>
                <div>
                    <p>Seguanda a Sabado de 08:00 as 11:00</p>
                    <button ><a id='whats' href="https://api.whatsapp.com/send?phone=5563991080174" target='_blank' rel="noopener noreferrer">Nome Vendedor</a></button>
                </div>
                <div>
                    <p>Seguanda a Sabado de 11:00 as 14:00</p>
                    <button ><a id='whats' href="https://api.whatsapp.com/send?phone=5563991080174" target='_blank' rel="noopener noreferrer">Nome Vendedor</a></button>
                </div>
                <div>
                    <p>Seguanda a Sabado de 14:00 as 18:00</p>
                    <button ><a id='whats' href="https://api.whatsapp.com/send?phone=5563991080174" target='_blank' rel="noopener noreferrer">Nome Vendedor</a></button>
                </div>
            </div>
        </div>
        </section>
    )
}
export default Vendas