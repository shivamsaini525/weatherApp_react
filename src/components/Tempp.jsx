import { ImLocation2 } from "react-icons/im";
import style from './Tempp.module.css'
import { useEffect, useState } from "react";

const Tempp=()=>{
    const [city, setCity]=useState(null)
    const [search,setSearch]=useState("Delhi")

    useEffect( ()=>{
        const fetchApi = async()=>{
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c524416db38f0ba5c3921b857a2e6229`
            const response = await fetch(url)
            const resJson =await response.json();
            
            setCity(resJson.main)
            

        }
        fetchApi()
    },[search] )
    return(
        <>
        <div className={`${style.app} container`}>
          <div className="">
                <input type="search" value={search} className={`${style.search} p-2`} 
                onChange={ (event)=>{
                    setSearch(event.target.value)
                }}
                ></input>
            </div>
           {!city? (<p>No Data Found </p>):
           ( <div className="tem_info">
                <div className={`${style.citylogo}`}>
                  <ImLocation2 />
                  <h1 className={`${style.city}`}>{search}</h1> 
                </div>
                
                <h2> {city.temp} °Cel</h2>
                <p className="pt-3">Min Temp <b><i>{city.temp_min} °C</i></b>  Max Temp <b><i>{city.temp_max} °C</i></b></p>
                <p className="">pressure <i>{city.pressure}</i> humidity <i>{city.humidity}</i> </p>
            </div>)
           }
         
        </div>


        </>

    )
}
export default Tempp