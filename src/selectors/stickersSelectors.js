import { useSelector } from "react-redux";


export const getCountriesStickers = useSelector((state) => {
    state.countries;
})

export const getStickersByCountryName = (countryName) => {
    useSelector( state => {
        return state.countries.filter( coun => {coun.name === country})
    })
}

export const getStickersByCountryIdx = (countryIdx) => {
    useSelector( state => {
        return state.countries[countryIdx]
    })
}

export const getDashboard = useSelector((state) => {
    state.dashboard;
})

// getStickersObtained = () => {
//     useSelector( state => {
//         return state.countries[countryIdx]
//     })
// }