import React from 'react'
import { InfoSticker } from './InfoSticker'
import { RepText } from './RepText'
import './groupStickers.css'

export const GroupStickers = ({countryName, items, rep}) => {
  return (
    <div>
        <h2>{countryName}</h2>
          { items.length ? (
          <div className='info-sticker-container'>
            {items.map(
              (coun, idx) => {
                return(
                    <InfoSticker key={idx} stickerId={coun} />
                )
              }
            )}
          </div>
        ) : (
              <RepText rep={rep} countryName={countryName}/>
        ) }
    </div>
  )
}
