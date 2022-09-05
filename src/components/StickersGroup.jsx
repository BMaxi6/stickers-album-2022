import React from 'react'
import { useSelector } from 'react-redux'
import { StickerItem } from './StickerItem'
import './stickersGroup.css'

export const StickersGroup = ({countryIdx}) => {

    const countryData = useSelector( state => {
        return state.countries[countryIdx]
    })

  return (
    <div>
        <h2>
            {countryData.name}
        </h2>
        <div className='stickers-container'>
            { countryData?.items?.map(
                (quantity, idx) => {
                    return (
                        <StickerItem key={idx} stickerId={idx} countryIdx={countryIdx}/>
                    )
                }
            )}
        </div>
    </div>
    

  )
}
