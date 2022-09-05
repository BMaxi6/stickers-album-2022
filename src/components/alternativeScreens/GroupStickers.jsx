import React from 'react'
import { InfoSticker } from './InfoSticker'
import { RepText } from './RepText'

export const GroupStickers = ({countryName, items, rep}) => {
  return (
    <div>
        <h2>{countryName}</h2>
        { items.length ? (
        items.map(
          (coun, idx) => {
            return(
                <InfoSticker key={idx} stickerId={coun} />
            )
          }
        )
      ) : (
            <RepText rep={rep} countryName={countryName}/>
      ) }
    </div>
  )
}
