import style from './Navbar.module.css'
import {Link} from 'react-router-dom'
function Navbar (){
 
    return( 
        <navbar className={style.navbar}>
            <Link to="/">LOGO</Link>
            <nav>
                <a href="#masc">Masculino</a>
                <a href="#fem">Femenino</a>
                <a href="#inf">Infantil</a>
                <a href="#eletro">Eletronicos</a>
            </nav>
            <div>
                <button ><a id='whats' href="https://api.whatsapp.com/send?phone=5563991080174" target='_blank'>Whatsapp</a></button>
                <a href="">Add</a>
            </div>

        </navbar>
        
    )
}
export default Navbar