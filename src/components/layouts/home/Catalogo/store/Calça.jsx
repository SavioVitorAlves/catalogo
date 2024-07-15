import style from './Grid.module.css'
import Card from "../../../Cards/Card"
function Calça(){
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
export default Calça