import React,{useState,useEffect} from 'react';
import './style.css';
import TempCard from './TempCard';

const Weather = () => {

    const[searchValue, setSearchValue] = useState("nagaon");
    const [tempInfo, setTempInfo] = useState({});
    
    const getWeatherInfo= async()=>{
        try {
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=56e38e5fbecc0e6d2649a51ec6d66ac3`;
            
            const res = await fetch(url);
            const data = await res.json()   //to convert in the readable format used await
            
            const {temp, humidity,pressure} = data.main;
            const {main: weathermood} = data.weather[0];  //since it is on a 
            const {name} = data;
            const {speed} = data.wind;
            const {country,sunset} = data.sys;

            //destructuring by creating object

            const newWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };

            setTempInfo(newWeatherInfo);
        } catch (error) {
            console.log('Error');
            
        }

    }

    useEffect(() => {
       getWeatherInfo();    //to get the city bydefault calling the function
    }, [])

    return (
        <>
            <div className='wrap'>
                <div className="search">
                    <input type='search' placeholder='Search the city'
                    autoFocus id='search' className='searchTerm' 
                    value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>

                <button className="searchButton" type='button' onClick={getWeatherInfo}>Search</button>
                 </div>
            </div> 

        {/*temp card*/}
        <TempCard tempInfo={tempInfo}/>
       
        </>
    )
};

export default Weather;
