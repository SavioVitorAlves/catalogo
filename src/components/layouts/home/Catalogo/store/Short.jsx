import style from './Grid.module.css'
import Card from "../../../Cards/Card"
function Short(){
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
export default Short