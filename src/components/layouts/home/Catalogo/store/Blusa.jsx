import Card from "../../../Cards/Card"
import style from './Grid.module.css'
function Blusa(){
    return (
        <div className={style.grid}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
export default Blusa