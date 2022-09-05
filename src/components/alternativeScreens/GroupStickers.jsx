import React from 'react'
import { InfoSticker } from './InfoSticker'
import { RepText } from './RepText'

export const GroupStickers = ({countryName, items, rep}) => {
  console.log(countryName)
  return (
    <div>
        <h2>{countryName}</h2>
        { items.length ? (
        items.map(
          (coun, idx) => {
            return(
                <InfoSticker key={idx} stickerId={idx} />
            )
          }
        )
      ) : (
            <RepText rep={rep} countryName={countryName}/>
      ) }
    </div>
  )
}
