import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './stickerItem.css';
import { useCounter } from '../hooks/useCounter';
import { useDispatch } from 'react-redux';

export const StickerItem = ({stickerId, countryIdx}) => {

  const {quantity, acumular, disminuir} = useCounter(countryIdx, stickerId);

  return (
    <Card style={{ width: '8rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>
            <div className={`centred-element ${quantity && "obtained-sticker"}`}>
                {stickerId}({quantity})
            </div>
        </ListGroup.Item>
        <ListGroup.Item>
            <div>
                <div className="sticker-container centred-element">
                <button className='sticker-button' onClick={disminuir}>
                        -1
                </button>
                </div>
                |
                <div className="sticker-container">
                <button className='sticker-button' onClick={acumular}>
                        +1
                </button>
                </div>
            </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}
