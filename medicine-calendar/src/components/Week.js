import React from 'react'
import Day from './Day'
import Moon from './Moon'
import Sun from './Sun'
import moment from 'moment';
export default function Week(props){
    const week = []


    for (let i = 0; i < 8; i++){
      week.push(moment().day(i).format("MM/DD"))
    }

    return (
        <div className='week-container'>
            <div className='svg-container'>
                <Moon />
                <br></br>
                <br></br>
                <Sun/>
            </div>
            <Day weekDay="Mon" date={week[0]} missedCount={props.missedCount}/>
            <Day weekDay="Tue" date={week[1]} missedCount={props.missedCount}/>
            <Day weekDay="Wed" date={week[2]} missedCount={props.missedCount}/>
            <Day weekDay="Thu" date={week[3]} missedCount={props.missedCount}/>
            <Day weekDay="Fri" date={week[4]} missedCount={props.missedCount}/>
            <Day weekDay="Sat" date={week[5]} missedCount={props.missedCount}/>
            <Day weekDay="Sun" date={week[6]} missedCount={props.missedCount}/>
        </div>
    )
}