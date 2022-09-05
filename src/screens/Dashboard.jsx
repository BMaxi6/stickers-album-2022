import React, { useState } from 'react'
import { useSelector, useStore } from 'react-redux';

export const Dashboard = () => {
    const store = useStore();
    
    const dashboard = useSelector( state => state.dashboard )

  return (
    <div>
        <h1>Dashboard</h1>    
        { dashboard ? 
            (
                <div>
                    <h3>Obtenidas</h3>
                    <p>{dashboard.obtaineds}</p>

                    <h3>Faltantes</h3>
                    <p>{dashboard.missings}</p>

                    <h3>Figuritas totales</h3>
                    <p>{dashboard.total}</p>
                </div>
            ) : (
                <div>
                    Todavía no se cargaron estadísticas
                </div>
            )
        }
    </div>
  )
}
