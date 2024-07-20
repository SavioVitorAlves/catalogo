import style from './Grid.module.css'
import Card from "../../../Cards/Card"
function Calça({img1, price1, tamanho1, img2, price2, tamanho2, img3, price3, tamanho3, img4, price4, tamanho4 }){
    return (
        <div className={style.grid}>
            <Card img={img1} preco={price1} tamanho={tamanho1}/>
            <Card img={img2} preco={price2} tamanho={tamanho2}/>
            <Card img={img3} preco={price3} tamanho={tamanho3}/>
            <Card img={img4} preco={price4} tamanho={tamanho4}/>
          
        </div>
    )
}
export default Calça