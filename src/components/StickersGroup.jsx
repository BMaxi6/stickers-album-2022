import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useStore } from 'react-redux'
import { StickerItem } from './StickerItem'
import { CardGroup } from 'react-bootstrap'

export const StickersGroup = ({countryIdx}) => {

    const countryData = useSelector( state => {
        return state.countries[countryIdx]
    })

  return (
    <div>
        <h2>
            {countryData.name}
        </h2>
        { countryData?.items?.map(
            (quantity, idx) => {
                return (
                    <StickerItem key={idx} stickerId={idx} countryIdx={countryIdx}/>
                )
            }
        )}
    </div>
    

  )
}
