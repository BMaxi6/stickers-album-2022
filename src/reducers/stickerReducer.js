import React from 'react'
import { ADD_STICKER, REMOVE_STICKER, GET_STICKERS } from './../actions/stickerActions'

export const sticker_initial_state = {
    countries: [],
    dashboard: {}
}

const addStickerToObj = (obj, countryIdx, stickerIdx) => {
    if(obj.countries[countryIdx].items[stickerIdx] === 0){
        obj.dashboard.obtaineds += 1
        obj.dashboard.missings -= 1
    }
    obj.countries[countryIdx].items[stickerIdx] += 1;
    return obj
}

const removeStickerToObj = (obj, countryIdx, stickerIdx) => {
    obj.countries[countryIdx].items[stickerIdx] -= 1;
    if(obj.countries[countryIdx].items[stickerIdx] === 0){
        obj.dashboard.obtaineds -= 1
        obj.dashboard.missings += 1
    }
    return obj
}

export const stickerReducer = (state = sticker_initial_state, action) => {
    
    switch(action.type) {
        case GET_STICKERS: {
            return action.payload.state
        }

        case ADD_STICKER: {
            let obj = {
                ...state
            }
            obj = addStickerToObj(obj, action.payload.countryIdx, action.payload.stickerIdx)
            return obj
        }

        case REMOVE_STICKER: {
            let obj = {
                ...state
            }
            obj = removeStickerToObj(obj, action.payload.countryIdx, action.payload.stickerIdx)
            return obj
        }

        default: return state;
    }


  return state
}
