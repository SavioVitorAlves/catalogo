import style from './Cartaz.module.css'
import cartaz1 from '../../../../imgs/cartaz_1.png'
import cartaz2 from '../../../../imgs/cartaz_2.png'
function Cartaz() {
    return (
        <section id='promocao' className={style.cartaz}>
            <div>
                <img src={cartaz1} alt="Promoções" />
            </div>
            <div>
                <img src={cartaz2} alt="Relogios e Eletronicos" />
            </div>
        </section>
    )
}
export default Cartaz