import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { GroupStickers } from '../components/alternativeScreens/GroupStickers'

export const Obtained = () => {

  const obtainedCountries = useSelector( state => {
    let pivotCount = []
    state.countries.map(country => {
      pivotCount.push({
        name: country.name,
        items: country.items.filter(quant => quant > 0)
      })
    }) 
    return pivotCount;
  })  

  return (
    <div className="padding-body">
      <h1>QATAR 2022 OBTAINED</h1>
      { obtainedCountries ? (
        obtainedCountries.map(
          (coun, idx) => {
            return (
              <GroupStickers key={idx} countryName={coun.name} items={coun.items} rep={true}/>
            )
          }
        )
      ) : (
          <div>No se cargaron figuritas</div>
      ) }
    </div>
  )
}
