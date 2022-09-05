export const ADD_STICKER = 'ADD_STICKER';
export const REMOVE_STICKER = 'REMOVE_STICKER';
export const GET_STICKERS = 'GET_STICKERS'

export const get_sticker_action = (state) => {
    return {
        type: GET_STICKERS,
        payload: {
            state
        }
    }
}

export const add_sticker_action = (countryIdx, stickerIdx) => {
    return {
        type: ADD_STICKER,
        payload: {
            countryIdx: countryIdx,
            stickerIdx: stickerIdx
        }
    }
}

export const remove_sticker_action = (countryIdx, stickerIdx) => {
    return {
        type: REMOVE_STICKER,
        payload: {
            countryIdx: countryIdx,
            stickerIdx: stickerIdx
        }
    }
}