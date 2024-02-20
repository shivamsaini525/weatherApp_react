import { ImLocation2 } from "react-icons/im";
import style from './Tempp.module.css'
const Tempp=()=>{


    return(
        <>
        <div className={`${style.app} container`}>
            <input type="search"  className={`${style.search}`}
            ></input>

            <div className="tem_info">
                <div className={`${style.citylogo}`}>
                  <ImLocation2 />
                  <h1 className={`${style.city}`}>Saharanpur</h1> 
                </div>
                <hr></hr>
                <p>Temparature 18 C</p>
            </div>

            



        </div>


        </>

    )
}
export default Tempp