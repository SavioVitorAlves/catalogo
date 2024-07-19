import Header from '../layouts/home/Header'
import Catalogo from '../layouts/home/Catalogo'
import Conectar from '../server/conectar'
function Home (){
    return (
        <div>
            <Header/>
            <Catalogo/>
            
        </div>
    )
}
export default Home