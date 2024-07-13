import { useEffect } from 'react'
import style from './Header.module.css'
import cat_1 from '../../../imgs/cat_1.png'
import cat_2 from '../../../imgs/cat_2.png'
import cat_3 from '../../../imgs/cat_3.png'
function Header(){
    useEffect(() => {
        const interval = setInterval(() => {
          const nextButton = document.getElementById('next');
          if (nextButton) {
            nextButton.click();
          }
        }, 10000);
    
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
      }, []);
    return (
          <header className={style.header}>         
          <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img className={`${style.config} d-block w-100`} src={cat_1} alt="..."/>
            </div>
            <div className="carousel-item">
              <img className={`${style.config} d-block w-100`} src={cat_2} alt="..."/>
            </div>
            <div className="carousel-item">
              <img className={`${style.config} d-block w-100`} src={cat_3} alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button id='next' class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </header>
    )
}
export default Header