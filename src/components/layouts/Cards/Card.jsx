import style from './Card.module.css'
function Card(){
    return(
        <div className={style.card}>
            <div className={style.div_img}></div>
            
            <div className={style.price}>
                <div>
                <p className={style.valor}>R$</p>
                <p className={style.valor}>34,99</p>
                </div>
                <div>
                    <p className={style.tamanho}>P</p>
                    <p className={style.tamanho}>M</p>
                    <p className={style.tamanho}>G</p>
                </div>
            </div>
            

        </div>
    )
}
export default Card