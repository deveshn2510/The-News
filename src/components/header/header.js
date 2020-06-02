import React, { useEffect, useState } from 'react';

import Style from './style.module.css';

const Header = () => {
    const [long, setLong] = useState('');
    const [lat, setLat] = useState('');
    const [temp, setTemp] = useState('');

    useEffect(() => {
       const getLocations=async function() 
       {
        await navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        })
       } 
        
        const fetchData = async function() 
        {
         await  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a6ca8aac3488196c4d79075708e299f9`)
        .then(res => res.json())
        .then(res => { 
            const data = res.wind.speed;
            console.log(data)
            setTemp(data)
        })
        }

        getLocations();
        fetchData();
        

        
    }, [lat, long])
    return (
        <div>
            <div className={Style.container}>
                <div className={Style.header}>
                    The News
                </div>
                <div className={Style.temp}>
                  {temp-273.15}
                </div>

            </div>
        </div>
    )
}

export default Header;