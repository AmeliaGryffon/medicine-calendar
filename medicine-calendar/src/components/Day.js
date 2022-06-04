import { getQueriesForElement } from '@testing-library/react'
import React from 'react'

export default function Day(props){
    const date = props.date
    const weekDay = props.weekDay
    const [morningTaken, setMorningTaken] = React.useState(localStorage.getItem(`${props.weekDay}-morning`) === 'true' || false)
    const [eveningTaken, setEveningTaken] = React.useState(localStorage.getItem(`${props.weekDay}-evening`) === 'true' || false)
    const saveMorning = () => {
        setMorningTaken(!morningTaken)
        localStorage.setItem(`${props.weekDay}-morning`, !morningTaken)
        props.missedCount()
    }

    const saveEvening = () => {
        setEveningTaken(!eveningTaken)
        localStorage.setItem(`${props.weekDay}-evening`, !eveningTaken)
        props.missedCount()
    }

    return (
        <div>
            <p className='date'>{weekDay}<br></br> {date}</p>
                <div style={{backgroundColor: morningTaken ? "green" : "white"}}className='day-container' onClick={() => {saveMorning()}}>
                </div>
                <br className='day-seperator'></br>
                <div style={{marginTop: 100, backgroundColor: eveningTaken ? "green" : "white"}} className='day-container' onClick={() => saveEvening()}>
                </div>
            </div>
    )
}