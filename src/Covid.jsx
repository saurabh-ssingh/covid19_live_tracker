import React,{useEffect, useState} from "react";
import './covid.css';


const Covid = () =>{

    const[data, setData]=useState([]);

    const getCovidData = async () =>{
        try{
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);

        }
        catch(error){
            console.log(error);
        }
        
    }

    useEffect(()=>{
       getCovidData();
    },[]);

    return(
        <>
            <div className = 'heading__style'>
                <h1>🔴LIVE</h1>
                <h1>COVID DATA INDIA</h1>

            </div>
            
            
            <ul>
                <li className = 'card__container'>
                    <div className = 'card__content'>
                        <div className = 'card__title'>
                            <h1>Our Country</h1>
                            <h1 className = 'card__total card__small'>INDIA</h1>
                        </div>
                    </div>
                </li>
                 
                <li className = 'card__container'>
                    <div className = 'card__content'>
                        <div className = 'card__title'>
                            <h1>Total Recovered</h1>
                            <h1 className = 'card__total card__small'>{data.recovered}</h1>
                        </div>
                    </div>
                </li>

                <li className = 'card__container'>
                    <div className = 'card__content'>
                        <div className = 'card__title'>
                            <h1>Total Confirmed</h1>
                            <h1 className = 'card__total card__small'>{data.confirmed}</h1>
                        </div>
                    </div>
                </li>

                <li className = 'card__container'>
                    <div className = 'card__content'>
                        <div className = 'card__title'>
                            <h1>Total Death</h1>
                            <h1 className = 'card__total card__small'>{data.deaths}</h1>
                        </div>
                    </div>
                </li>

                <li className = 'card__container'>
                    <div className = 'card__content'>
                        <div className = 'card__title'>
                            <h1>Total Active</h1>
                            <h1 className = 'card__total card__small'>{data.active}</h1>
                        </div>
                    </div>
                </li>

                <li className = 'card__container'>
                    <div className = 'card__content'>
                        <div className = 'card__title'>
                            <h1>Last Updates</h1>
                            <h1 >{data.lastupdatedtime}</h1>
                        </div>
                    </div>
                </li>

            </ul>

            

        </>
    );
}

export default Covid;