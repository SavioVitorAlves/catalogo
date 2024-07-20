import style from './Masculino.module.css'
import Blusa from './store/Blusa'
import Calça from './store/Calça'
import Calçados from './store/Calçados'
import Itens from './store/Itens'
import Short from './store/Short'
/*---------- IMG BLUSAS---------*/
import bm1 from '../../../../imgs/masculino/bm/bm1.jpg'
import bm2 from '../../../../imgs/masculino/bm/bm2.jpg'
import bm3 from '../../../../imgs/masculino/bm/bm3.jpg'
import bm4 from '../../../../imgs/masculino/bm/bm4.jpg'
/*---------- IMG CALÇAS---------*/
import cm1 from '../../../../imgs/masculino/cm/cm1.jpeg'
import cm2 from '../../../../imgs/masculino/cm/cm2.jpeg'
import cm3 from '../../../../imgs/masculino/cm/cm3.jpg'
import cm4 from '../../../../imgs/masculino/cm/cm4.jpg'
/*---------- IMG SHORTS---------*/
import sm1 from '../../../../imgs/masculino/sm/sm1.jpg'
import sm2 from '../../../../imgs/masculino/sm/sm2.jpg'
import sm3 from '../../../../imgs/masculino/sm/sm3.jpeg'
import sm4 from '../../../../imgs/masculino/sm/sm4.jpg'
/*---------- IMG CALÇADOS---------*/
import pm1 from '../../../../imgs/masculino/pm/pm1.jpg'
import pm2 from '../../../../imgs/masculino/pm/pm2.jpg'
import pm3 from '../../../../imgs/masculino/pm/pm3.jpg'
import pm4 from '../../../../imgs/masculino/pm/pm4.jpg'
/*---------- IMG ITENS---------*/
import im1 from '../../../../imgs/masculino/im/im1.jpg'
import im2 from '../../../../imgs/masculino/im/im2.jpg'
import im3 from '../../../../imgs/masculino/im/im3.jpg'
import im4 from '../../../../imgs/masculino/im/im4.jpg'
function Masculino() {
    return (
        <section id='masc' className={style.masculino}>
            <h3>Moda Masculina</h3>
            <Blusa img1={bm1} price1={'87,33'} tamanho1={'P M'} img2={bm2} price2={'49,90'} tamanho2={'P M G'} img3={bm3} price3={'55,90'} tamanho3={'P G'} img4={bm4} price4={'34,90'} tamanho4={'P M'}/>
            <Calça img1={cm1} price1={'87,33'} tamanho1={'P M'} img2={cm2} price2={'49,90'} tamanho2={'P M G'} img3={cm3} price3={'55,90'} tamanho3={'P G'} img4={cm4} price4={'34,90'} tamanho4={'P M'}/>
            <Short img1={sm1} price1={'87,33'} tamanho1={'P M'} img2={sm2} price2={'49,90'} tamanho2={'P M G'} img3={sm3} price3={'55,90'} tamanho3={'P G'} img4={sm4} price4={'34,90'} tamanho4={'P M'}/>
            <Calçados img1={pm1} price1={'87,33'} tamanho1={'P M'} img2={pm2} price2={'49,90'} tamanho2={'P M G'} img3={pm3} price3={'55,90'} tamanho3={'P G'} img4={pm4} price4={'34,90'} tamanho4={'P M'}/>
            <Itens img1={im1} price1={'87,33'} tamanho1={'P M'} img2={im2} price2={'49,90'} tamanho2={'P M G'} img3={im3} price3={'55,90'} tamanho3={'P G'} img4={im4} price4={'34,90'} tamanho4={'P M'}/>
        </section>
    )
}
export default Masculino