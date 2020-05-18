import React, { useContext} from 'react'
import { CalorieEvent } from './CalorieEvent'
import { GlobalContext } from '../context/GlobalContext'

export const CalorieEventList = () => {
    const { calorieEvents } = useContext(GlobalContext);

    return (
        <div>
        <h3>History</h3>
        <ul className="list">
        {calorieEvents.map(cEvent => (<CalorieEvent key={cEvent.id} calorieEvent={cEvent} />))}
      </ul>
            
        </div>
    )
}
