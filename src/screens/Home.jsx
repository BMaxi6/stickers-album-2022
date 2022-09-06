import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { StickersGroup } from '../components/StickersGroup';
import { get_sticker_action } from './../actions/stickerActions'
import { getStickers } from './../services/stickerService'

export const Home = () => {

  const store = useStore();
  const stock = useSelector(state => state.countries)

  const dispatch = useDispatch()

  const getStick = () => {
    getStickers().then((res)=>{
      dispatch(get_sticker_action(res));
    })
  }

  return (
    <div className="padding-body" style={{textAlign: 'center'}}>
      <h1>QATAR 2022 STICKER ALBUM</h1>
      
      <button className='home-button' onClick={() => getStick()}>
        <div className='home-button-text'>
        TRAER STICKERS
        </div>
      </button>

      { stock ? (
          stock.map(
            (coun, idx) => {
              return(
                <StickersGroup key={idx} countryIdx={idx}/>
              )
            }
          )
      ) : (
        <div>No se cargaron figuritas</div>
      ) }

    </div>
  )
}