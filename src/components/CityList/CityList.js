import React, {Component} from 'react'
import City from '../City/City'
import Weather from '../Weather/Weather'
import {cityData} from './cityData'
import './CityList.scss'

export default class CityList extends Component {
  render() {
    const cities = cityData
    return(
      <section  className='cityList'>
      {
      cities.map(city=>{
        return (
          <div className='cityListGrid'>
            <City id={city.id} city={city}/>
            {
             //<Weather city={city.city} country={city.country}/>
             }
          </div>
        );
      })
      }
      </section>
    )
  }
}
