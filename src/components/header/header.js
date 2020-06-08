import React, { useEffect, useState } from 'react';

import Style from './style.module.css';
import Search from '../search/search';

const Header = () => {
    
    
    const [long, setLong] = useState(null); //For Longitude 
    const [lat, setLat] = useState(null); //For Latitude
    const [temp, setTemp] = useState('');   // For Temperature
    const [location, setLocation] = useState('');   // For getting location
    const [tempDes, setTempDes] = useState('');     // For Tempertaure description

    
    
    //Getting position and setting the state values
    useEffect(() => {

        navigator.geolocation.getCurrentPosition(function (position) {
            // console.log("Latitude is :", position.coords.latitude);
            // console.log("Longitude is :", position.coords.longitude);
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        })
        fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a6ca8aac3488196c4d79075708e299f9`)
            .then(res => res.json())
            .then(res => {
                const data = res;
                // console.log(data)
                setTemp(data.main.temp);
                setTempDes(data.weather[0].main);
                setLocation(data.name);
            })
    }, [lat, long])



    return (
        <div>
            <div className={Style.container}>
                <div className={Style.innerContanier}>
                    <div className={Style.header}>
                        The News
                    </div>
                    <div className={Style.tempDetails}>
                        {`${(temp - 273.15).toPrecision(3)} °C`}

                        <span className={Style.span}>{`, ${tempDes}`}</span>
                        <div>
                            {location}
                        </div>
                    </div>
                
                </div>
                

            </div>
            <Search />
            
        </div>
    )
}

export default Header;