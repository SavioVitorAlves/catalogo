import style from './Category.module.css'
/*----------IMPOTANDO IMAGENS-----------*/
import feminino from '../../../../imgs/category/feminino.png' 
import masculino from '../../../../imgs/category/masculino.png' 
import infantil from '../../../../imgs/category/infantil.png' 
import celulares from '../../../../imgs/category/celulares.png'
import perfumes from '../../../../imgs/category/perfumes.png'
import vestidos from '../../../../imgs/category/vestidos.png'
import tenis from '../../../../imgs/category/tenis.png'  
function Category() {
    return (
        <section className={style.category}>
            <div className={style.item}>
                <div className={style.cicle}>
                    <a href="#fem"><img className={style.feminino} src={feminino} alt="Moda Feminina" /></a>
                </div>
                <p>Feminino</p>
            </div>
            <div className={style.item}>
                <div className={style.cicle}>
                    <a href="#masc"><img className={style.masculino} src={masculino} alt="Moda masculina" /></a>
                </div>
                <p>Masculino</p>
            </div>
            <div className={style.item}>
                <div className={style.cicle}>
                    <a href="#inf"><img className={style.infantil} src={infantil} alt="Moda Infantil" /></a>
                </div>
                <p>Infantil</p>
            </div>
            <div className={style.item}>
                <div className={style.cicle}>
                    <a href="#eletro"><img className={style.celulares} src={celulares} alt="Celulares/Eletronicos" /></a>
                </div>
                <p>Celulares</p>
            </div>
            <div className={style.item}>
                <div className={style.cicle}>
                    <a href="#eletro"><img className={style.perfumes} src={perfumes} alt="Pefumes Importados" /></a>
                </div>
                <p>Pefumes</p>
            </div>
            <div className={style.item}>
                <div className={style.cicle}>
                    <a href="#fem"><img className={style.vestidos} src={vestidos} alt="Vestidos" /></a>
                </div>
                <p>Vestidos</p>
            </div>
            <div className={style.item}>
                <div className={style.cicle}>
                    <a href="#masc"><img className={style.tenis} src={tenis} alt="Tenis Masculios e Femininos" /></a>
                </div>
                <p>Calçados</p>
            </div>
        </section>
    )
}
export default Category