import style from './Infantil.module.css'
import Blusa from './store/Blusa'
import Vestido from './store/Vestido'
import Calça from './store/Calça'
import Calçados from './store/Calçados'
import Itens from './store/Itens'
import Short from './store/Short'
function Infantil() {
    return (
        <section id='inf' className={style.infantil}>
            <h3>Moda Infantil</h3>
            <Blusa/>
            <Vestido/>
            <Calça/>
            <Short/>
            <Calçados/>
            <Itens/>
        </section>
    )
}
export default Infantil