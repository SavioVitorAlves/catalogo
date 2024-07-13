import style from './Femenino.module.css'
import Blusa from './store/Blusa'
import Vestido from './store/Vestido'
import Calça from './store/Calça'
import Calçados from './store/Calçados'
import Itens from './store/Itens'
import Short from './store/Short'
function Femenino() {
    return( 
    <section className={style.femenino}>
        <h3>Moda Femenina</h3>
        <Blusa/>
        <Vestido/>
        <Calça/>
        <Short/>
        <Calçados/>
        <Itens/>
    </section>
    )
}
export default Femenino