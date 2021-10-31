import React,{useState,useEffect} from 'react'

const TempCard = ({tempInfo}) => {
    const [weatherState, setWeatherState] = useState("");
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    useEffect(() => {
       if (weathermood){
           switch (weathermood) {
               case 'Clouds':
                   setWeatherState("wi-cloud");                   
                   break;

                case 'Clear':
                    if(timestr='day'){
                    setWeatherState("wi-day-sunny");}
                    else{
                        setWeatherState("wi-night-clear")
                    }                   
                    break;

                case 'Haze':
                    setWeatherState("wi-fog");                   
                    break;

                case 'Mist':
                    setWeatherState("wi-dust");                   
                    break;
           
               default:
                   setWeatherState("wi-day-sunny");                   
                   break;
           }
       } 
       
    }, [weathermood])


    //converting second into time

    let sec = sunset;
    let date = new Date(sec*1000);   //to convert it in mili second
    //let timestr = `${date.getHours()}: ${date.getMinutes()}`;
    let timestr = `${date.toLocaleTimeString()}`;
    
    return (
        <div>
             {/*temperature card*/}

             <article className='widget'>

                 {/*to get the icon*/}

                {/* <div className='weatherIcon'>
                    <i className={`wi ${weatherState}`}></i>
                </div> */}

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">{name},{country}</div>
                    </div>
                </div>

                <div className='date'>{new Date().toLocaleString()}</div>

                {/*4 column section*/}
            {/*1  Sunset */}
                <div className='extra-temp'>
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">{timestr}<br/>Sunset
                            </p>
                        </div>
            {/*2   Wind spped*/}
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">{speed}<br/>Wind Speed
                            </p>
                        </div>
                    </div>    
            {/*3 Pressure*/}
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-rain"}></i>
                                </p>
                                <p className="extra-info-leftside">{pressure}<br/>Pressure
                                </p>
                        </div>
            {/*4 Humidity*/}
                        <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-humidity"}></i>
                                </p>
                                <p className="extra-info-leftside">{humidity}%<br/>Humidity
                                </p>
                        </div>
                    </div>
                         
                </div>    
            </article>
            
        </div>
    )
};

export default TempCard;
