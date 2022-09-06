import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './stickerItem.css';
import { useCounter } from '../hooks/useCounter';
import { useDispatch } from 'react-redux';

export const StickerItem = ({stickerId, countryIdx}) => {

  const {quantity, acumular, disminuir} = useCounter(countryIdx, stickerId);

  return (
      <div className='sticker-card'>
        <div className={`sticker-id centred-item ${quantity && "obtained-sticker"}`}>
            {stickerId}({quantity})
        </div>
        <div className="button-left centred-item">
          <button className='sticker-button' onClick={disminuir}>
                  -1
          </button>
        </div>
        <div className="button-right centred-item">
          <button className='sticker-button' onClick={acumular}>
                  +1
          </button>
        </div>
      </div>
  )
}
