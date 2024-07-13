import style from './Catalogo.module.css'
import Cartaz from './Catalogo/Cartaz'
import Category from './Catalogo/Category'
import Femenino from './Catalogo/Femenino'
import Infantil from './Catalogo/Infantil'
import Masculino from './Catalogo/Masculino'
import Itens from './Catalogo/Itens'
function Catalogo(){
    return (
        <div className={style.catalogo}>
            <Cartaz/>
            <Category/>
            <Femenino/>
            <Masculino/>
            <Itens/>
            <Infantil/>
        </div>
    )
}
export default Catalogo