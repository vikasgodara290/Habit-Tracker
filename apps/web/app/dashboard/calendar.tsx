'use client'
import Day from "./day"
import ForwardIcon from "./forwardIcon"
import BackwardIcon from "./backwardIcon"
import { useState } from "react"

const days =[
    {
        day: 'mon',
        date: 1,
        fullDate: '01-July-2025'
    },
    {
        day: 'tue',
        date: 2,
        fullDate: '02-July-2025'
    },
    {
        day: 'wed',
        date: 3,
        fullDate: '03-July-2025'
    },
    {
        day: 'thu',
        date: 4,
        fullDate: '04-July-2025'
    },
    {
        day: 'fri',
        date: 5,
        fullDate: '05-July-2025'
    },
    {
        day: 'sat',
        date: 6,
        fullDate: '06-July-2025'
    },
    {
        day: 'sun',
        date: 7,
        fullDate: '07-July-2025'
    },
    {
        day: 'mon',
        date: 8,
        fullDate: '08-July-2025'
    },
    {
        day: 'tue',
        date: 9,
        fullDate: '09-July-2025'
    },
    {
        day: 'wed',
        date: 10,
        fullDate: '10-July-2025'
    },
    {
        day: 'thu',
        date: 11,
        fullDate: '11-July-2025'
    },
    {
        day: 'fri',
        date: 12,
        fullDate: '12-July-2025'
    },
    {
        day: 'sat',
        date: 13,
        fullDate: '13-July-2025'
    },
    {
        day: 'sun',
        date: 14,
        fullDate: '14-July-2025'
    },
    {
        day: 'mon',
        date: 15,
        fullDate: '15-July-2025'
    },
    {
        day: 'tue',
        date: 16,
        fullDate: '16-July-2025'
    },
    {
        day: 'wed',
        date: 17,
        fullDate: '17-July-2025'
    },
    {
        day: 'thu',
        date: 18,
        fullDate: '18-July-2025'
    },
    {
        day: 'fri',
        date: 19,
        fullDate: '19-July-2025'
    },
    {
        day: 'sat',
        date: 20,
        fullDate: '20-July-2025'
    },
    {
        day: 'sun',
        date: 21,
        fullDate: '21-July-2025'
    }

]

export default function Calendar(){
    const [startingDate, setStartingDate] = useState<number>(0);

    const handleNextDate = () => {
        setStartingDate(c => c+1);
    }

    const handlePrevDate = () => {
        setStartingDate(c => c-1);
    }
    
    return(
        <div className="flex mx-auto w-full sm:w-[90%] md:w-[60%] lg:w-[50%] border">
            <div className="" onClick={handlePrevDate}>
                <BackwardIcon/>
            </div>
            <div className="overflow-hidden flex">
                {days.map((day, index) => (
                    (startingDate <= index) && <Day key={index} day={day.day} date={day.date}/>
                ))}
            </div>
            <div className="" onClick={handleNextDate}>
                <ForwardIcon/>
            </div>
        </div>
    )
}