import style from './Itens.module.css'
import Item from './store/Itens'
/*---------- IMG ITENS---------*/
import i1 from '../../../../imgs/itens/i1.jpg'
import i2 from '../../../../imgs/itens/i2.jpg'
import i3 from '../../../../imgs/itens/i3.jpg'
import i4 from '../../../../imgs/itens/i4.jpg'
import i5 from '../../../../imgs/itens/i5.jpg'
import i6 from '../../../../imgs/itens/i6.jpg'
import i7 from '../../../../imgs/itens/i7.jpg'
import i8 from '../../../../imgs/itens/i8.jpg'
function Itens() {
    return (
        <section id='eletro' className={style.itens}>
            <h3>Itens</h3>
            <Item img1={i1} price1={'1450,00'} tamanho1={'64GB'} img2={i2} price2={'960,90'} tamanho2={'32GB'} img3={i3} price3={'1199,99'} tamanho3={'128GB'} img4={i4} price4={'34,90'} tamanho4={'P M'}/>
            <Item img1={i5} price1={'120,33'} tamanho1={'PRETO'} img2={i6} price2={'89,90'} tamanho2={'DOURADO'} img3={i7} price3={'355,90'} tamanho3={'120ml'} img4={i8} price4={'569,40'} tamanho4={'150ml'}/>
        </section>
    )
}
export default Itens