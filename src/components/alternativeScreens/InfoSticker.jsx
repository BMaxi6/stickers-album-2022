import React from 'react'
import './infoSticker.css'

export const InfoSticker = ({stickerId}) => {
  return (
    <div className='sticker-box'>
        <p>{stickerId}</p>
    </div>
  )
}
