import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { StickersGroup } from '../components/StickersGroup';
import { get_sticker_action } from './../actions/stickerActions'
import { getStickers, saveStickers } from './../services/stickerService'

export const Home = () => {

  const store = useStore();
  const stock = useSelector(state => state.countries)

  const dispatch = useDispatch()

  const getStick = () => {
    getStickers().then((res)=>{
      dispatch(get_sticker_action(res));
    })
  }

  const saveStick = () => {
    saveStickers(store.getState()).then((res) => {
      alert('Stickers Guardados')
    })
    .catch((res) => {
      alert('No se pudieron guardar los stickers')
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

      <button className='home-button' onClick={() => saveStick()}>
        <div className='home-button-text'>
        GUARDAR STICKERS
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