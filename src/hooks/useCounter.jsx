import React, { useEffect, useState } from 'react'
import { useSelector, useStore } from 'react-redux';
import {add_sticker_action,remove_sticker_action} from './../actions/stickerActions'

export const useCounter = (countryIdx, stickerId) => {    

    const store = useStore();

    const quantity = useSelector(state => state.countries[countryIdx].items[stickerId])

    const acumular = () => {
        if(canAdd()){
            store.dispatch(add_sticker_action(countryIdx, stickerId));
        }
    }
    const disminuir = () => {
        if(canSubtract()){
            store.dispatch(remove_sticker_action(countryIdx, stickerId));
        }
    }

    const canAdd = () => {
        if(quantity > 4) return false;
        return true;
    }

    const canSubtract = () => {
        if(quantity < 1) return false;
        return true;
    }

  return {
    quantity,
    acumular,
    disminuir
  }
}
