'use client'

import Calendar from "./calendar";
import Habit from "./habit";

const habits = [
    {
        habit : "go to gym.",
        isDone : false,
        category : "habit",
        startingDate : "07-Jul-2025",
        endDate : "08-Aug-2025",
        description : "It was hard but I did it.",
        priority : 5,
    },
    {
        habit : "read book.",
        isDone : true,
        category : "habit",
        startingDate : "07-Jul-2025",
        endDate : "08-Aug-2025",
        description : "It was hard but I did it.",
        priority : 3,
    },
    {
        habit : "write code.",
        isDone : false,
        category : "habit",
        startingDate : "07-Jul-2025",
        endDate : "08-Aug-2025",
        description : "It was hard but I did it.",
        priority : 4,
    },
    {
        habit : "drink water.",
        isDone : true,
        category : "habit",     
        startingDate : "07-Jul-2025",
        endDate : "08-Aug-2025",
        description : "It was hard but I did it.",
        priority : 2,
    },
    {
        habit : "meditate.",
        isDone : false,
        category : "habit",     
        startingDate : "07-Jul-2025",
        endDate : "08-Aug-2025",
        description : "It was hard but I did it.",
        priority : 1,
    },
]


export default function Home(){
    return(
        <div className="">
            <Calendar/>
            {
                habits.map(habit => (
                    <Habit habit={habit}/>
                ))
            }
        </div>
    )
}
