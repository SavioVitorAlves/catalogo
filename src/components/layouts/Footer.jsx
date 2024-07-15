import style from './Footer.module.css'
import {Link} from 'react-router-dom'
import masatercard from '../../imgs/mastercard.png'
import pagbank from '../../imgs/pagbank.png'
import visa from '../../imgs/visa.jpeg'
function Footer (){
    return( 
        <footer className={style.footer}>
            <div className={style.info}>
                <div className={style.logo}>
                    <img src={visa} alt="" />
                </div>
                <div>
                    <h6>Institucional</h6>
                    <div>
                        <ul>
                            <li>
                                <a href="#promocao">Promoção</a>
                            </li>
                            <li>
                                <a href="#masc">Masculino</a> 
                            </li>
                            <li>
                                <a href="#fem">Femenino</a> 
                                
                            </li>
                            <li>
                                <a href="#inf">Infantil</a> 
                            </li>
                            <li>
                                <a href="#eletro">Eletronicos</a> 
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h6>Social</h6>
                    <div className={style.social}>
                        <a href="https://www.instagram.com/saviovitoralves/"><i className="fa-brands fa-instagram fa-xl" style={{ color: '#ffffff' }}></i></a>
                        <a href="https://www.linkedin.com/in/saviovitoralves/"><i className="fa-brands fa-linkedin fa-xl" style={{ color: '#ffffff' }}></i></a>
                        <a href="https://github.com/SavioVitorAlves"><i className="fa-brands fa-github fa-xl" style={{ color: '#ffffff' }}></i></a>
                        <a href="https://api.whatsapp.com/send?phone=5563991080174" target='_blank'><i className="fa-brands fa-whatsapp fa-xl" style={{ color: '#ffffff' }}></i></a>
                    </div>
                </div>
                <div>
                    <h6>Localização</h6>
                    <div>
                        <p>Avenida 14 de Dezembro, 258 - Belo Horizonte <br /> Minas Gerais</p>
                        <p>(63) 99108-0174</p>
                    </div>
                </div>
            </div>
            <div className={style.cartoes}>
                <p>Catalogo &copy; 2024</p>
                <div className={style.img}>
                    <img src={masatercard} alt="" />
                    <img src={pagbank} alt="" />
                    <img src={visa} alt="" /> 
                </div>
            </div>
        </footer>

    )
}
export default Footer