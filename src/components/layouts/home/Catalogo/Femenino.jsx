import style from './Femenino.module.css'
import Blusa from './store/Blusa'
import Vestido from './store/Vestido'
import Calça from './store/Calça'
import Calçados from './store/Calçados'
import Itens from './store/Itens'
import Short from './store/Short'
/*---------- IMG BLUSAS---------*/
import bf1 from '../../../../imgs/feminino/bf/bf1.jpg'
import bf2 from '../../../../imgs/feminino/bf/bf2.jpg'
import bf3 from '../../../../imgs/feminino/bf/bf3.jpg'
import bf4 from '../../../../imgs/feminino/bf/bf4.jpg'
/*---------- IMG VESTIDOS---------*/
import v1 from '../../../../imgs/feminino/v/v1.jpg'
import v2 from '../../../../imgs/feminino/v/v2.jpeg'
import v3 from '../../../../imgs/feminino/v/v3.jpg'
import v4 from '../../../../imgs/feminino/v/v4.jpg'
/*---------- IMG CALÇAS---------*/
import cf1 from '../../../../imgs/feminino/cf/cf1.png'
import cf2 from '../../../../imgs/feminino/cf/cf2.jpg'
import cf3 from '../../../../imgs/feminino/cf/cf3.jpg'
import cf4 from '../../../../imgs/feminino/cf/cf4.jpg'
/*---------- IMG SHORTS---------*/
import sf1 from '../../../../imgs/feminino/sf/sf1.jpg'
import sf2 from '../../../../imgs/feminino/sf/sf2.jpg'
import sf3 from '../../../../imgs/feminino/sf/sf3.jpeg'
import sf4 from '../../../../imgs/feminino/sf/sf4.png'
/*---------- IMG CALÇADOS---------*/
import pf1 from '../../../../imgs/feminino/pf/pf1.jpg'
import pf2 from '../../../../imgs/feminino/pf/pf2.jpg'
import pf3 from '../../../../imgs/feminino/pf/pf3.jpg'
import pf4 from '../../../../imgs/feminino/pf/pf4.jpg'
/*---------- IMG ITENS---------*/
import if1 from '../../../../imgs/feminino/if/if1.jpg'
import if2 from '../../../../imgs/feminino/if/if2.jpg'
import if3 from '../../../../imgs/feminino/if/if3.jpg'
import if4 from '../../../../imgs/feminino/if/if4.jpg'

function Femenino() {
    return( 
    <section id='fem' className={style.femenino}>
        <h3>Moda Femenina</h3>
        <Blusa img1={bf1} price1={'87,33'} tamanho1={'P M'} img2={bf2} price2={'49,90'} tamanho2={'P M G'} img3={bf3} price3={'55,90'} tamanho3={'P G'} img4={bf4} price4={'34,90'} tamanho4={'P M'}/>
        <Vestido img1={v1} price1={'87,33'} tamanho1={'P M'} img2={v2} price2={'49,90'} tamanho2={'P M G'} img3={v3} price3={'55,90'} tamanho3={'P G'} img4={v4} price4={'34,90'} tamanho4={'P M'}/>
        <Calça img1={cf1} price1={'87,33'} tamanho1={'P M'} img2={cf2} price2={'49,90'} tamanho2={'P M G'} img3={cf3} price3={'55,90'} tamanho3={'P G'} img4={cf4} price4={'34,90'} tamanho4={'P M'}/>
        <Short img1={sf1} price1={'87,33'} tamanho1={'P M'} img2={sf2} price2={'49,90'} tamanho2={'P M G'} img3={sf3} price3={'55,90'} tamanho3={'P G'} img4={sf4} price4={'34,90'} tamanho4={'P M'}/>
        <Calçados img1={pf1} price1={'87,33'} tamanho1={'P M'} img2={pf2} price2={'49,90'} tamanho2={'P M G'} img3={pf3} price3={'55,90'} tamanho3={'P G'} img4={pf4} price4={'34,90'} tamanho4={'P M'}/>
        <Itens img1={if1} price1={'87,33'} tamanho1={'P M'} img2={if2} price2={'49,90'} tamanho2={'P M G'} img3={if3} price3={'55,90'} tamanho3={'P G'} img4={if4} price4={'34,90'} tamanho4={'P M'}/>
    </section>
    )
}
export default Femenino