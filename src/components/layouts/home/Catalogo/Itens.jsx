import style from './Itens.module.css'
import Item from './store/Itens'
function Itens() {
    return (
        <section id='eletro' className={style.itens}>
            <h3>Itens</h3>
            <Item/>
        </section>
    )
}
export default Itens