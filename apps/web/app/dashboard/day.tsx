
interface DayProps{
    className?: string;
    day: string;
    date: number;
}

export default function Day({className, day, date} : DayProps){
    return(
        <div className="w-[48px] border border-black flex-col rounded-[15px] flex-shrink-0 m-0.5">
            {/*day*/}
            <div className="flex justify-center">{day}</div>
            {/*Date*/}
            <div className="font-bold flex justify-center rounded-[10px] border-t border-black">{date}</div>
        </div>
    )
}