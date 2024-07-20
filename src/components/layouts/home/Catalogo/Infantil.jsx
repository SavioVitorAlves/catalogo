import style from './Infantil.module.css'
import Blusa from './store/Blusa'
import Vestido from './store/Vestido'
import Calça from './store/Calça'
import Calçados from './store/Calçados'
import Itens from './store/Itens'
import Short from './store/Short'
/*---------- IMG BLUSAS---------*/
import bk1 from '../../../../imgs/infantil/bk/bk1.jpg'
import bk2 from '../../../../imgs/infantil/bk/bk2.jpg'
import bk3 from '../../../../imgs/infantil/bk/bk3.jpg'
import bk4 from '../../../../imgs/infantil/bk/bk4.jpg'
/*---------- IMG VESTIDOS---------*/
import vk1 from '../../../../imgs/infantil/vk/vk1.jpg'
import vk2 from '../../../../imgs/infantil/vk/vk2.jpg'
import vk3 from '../../../../imgs/infantil/vk/vk3.png'
import vk4 from '../../../../imgs/infantil/vk/vk4.jpg'
/*---------- IMG CALÇAS---------*/
import ck1 from '../../../../imgs/infantil/ck/ck1.jpg'
import ck2 from '../../../../imgs/infantil/ck/ck2.jpg'
import ck3 from '../../../../imgs/infantil/ck/ck3.jpeg'
import ck4 from '../../../../imgs/infantil/ck/ck4.png'
/*---------- IMG SHORTS---------*/
import sk1 from '../../../../imgs/infantil/sk/sk1.jpg'
import sk2 from '../../../../imgs/infantil/sk/sk2.jpg'
import sk3 from '../../../../imgs/infantil/sk/sk3.jpg'
import sk4 from '../../../../imgs/infantil/sk/sk4.jpg'
/*---------- IMG CALÇADOS---------*/
import pk1 from '../../../../imgs/infantil/pk/pk1.jpg'
import pk2 from '../../../../imgs/infantil/pk/pk2.jpg'
import pk3 from '../../../../imgs/infantil/pk/pk3.png'
import pk4 from '../../../../imgs/infantil/pk/pk4.jpg'

function Infantil() {
    return (
        <section id='inf' className={style.infantil}>
            <h3>Moda Infantil</h3>
            <Blusa img1={bk1} price1={'87,33'} tamanho1={'P M'} img2={bk2} price2={'49,90'} tamanho2={'P M G'} img3={bk3} price3={'55,90'} tamanho3={'P G'} img4={bk4} price4={'34,90'} tamanho4={'P M'}/>
            <Vestido img1={vk1} price1={'87,33'} tamanho1={'P M'} img2={vk2} price2={'49,90'} tamanho2={'P M G'} img3={vk3} price3={'55,90'} tamanho3={'P G'} img4={vk4} price4={'34,90'} tamanho4={'P M'}/>
            <Calça img1={ck1} price1={'87,33'} tamanho1={'P M'} img2={ck2} price2={'49,90'} tamanho2={'P M G'} img3={ck3} price3={'55,90'} tamanho3={'P G'} img4={ck4} price4={'34,90'} tamanho4={'P M'}/>
            <Short img1={sk1} price1={'87,33'} tamanho1={'P M'} img2={sk2} price2={'49,90'} tamanho2={'P M G'} img3={sk3} price3={'55,90'} tamanho3={'P G'} img4={sk4} price4={'34,90'} tamanho4={'P M'}/>
            <Calçados img1={pk1} price1={'87,33'} tamanho1={'P M'} img2={pk2} price2={'49,90'} tamanho2={'P M G'} img3={pk3} price3={'55,90'} tamanho3={'P G'} img4={pk4} price4={'34,90'} tamanho4={'P M'}/>
    </section>
    )
}
export default Infantil