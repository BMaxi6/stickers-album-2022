import React from 'react'
import './../../App.css'

export const RepText = ({rep, countryName}) => {
    return (
        <div>
        { rep ? (
                <p>No tenes figuritas de {countryName}</p>
            ): (
                <p>Tenes todas las figuritas de {countryName}</p>
            )
        }
        </div>
    )
} 
