import React from 'react'
import { useSelector } from 'react-redux'
import { GroupStickers } from '../components/alternativeScreens/GroupStickers'

export const Missing = () => {

  const missingCountries = useSelector( state => {
    let pivotCountry = []
    state.countries.map((country,index) => {
      let pivotStickers = []
      country.items.forEach( (item, idx) => {
        if(item === 0) pivotStickers.push(idx)
      })
      pivotCountry.push({
        name: country.name,
        items: pivotStickers
      })
    }) 
    return pivotCountry;
  })  

  return (
    <div className="padding-body">
      <h1>QATAR 2022 MISSING</h1>
      { missingCountries ? (
        missingCountries.map(
          (coun, idx) => {
            return (
              <GroupStickers key={idx} countryName={coun.name} items={coun.items} rep={false}/>
            )
          }
        )
      ) : (
          <div>No se cargaron figuritas</div>
      ) }
    </div>
  )
}
