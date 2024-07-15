import style from './Masculino.module.css'
import Blusa from './store/Blusa'
import Calça from './store/Calça'
import Calçados from './store/Calçados'
import Itens from './store/Itens'
import Short from './store/Short'
function Masculino() {
    return (
        <section id='masc' className={style.masculino}>
            <h3>Moda Masculina</h3>
            <Blusa/>
            <Calça/>
            <Short/>
            <Calçados/>
            <Itens/>
        </section>
    )
}
export default Masculino