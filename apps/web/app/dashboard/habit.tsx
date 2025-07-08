
import CheckIcon from "./checkIcon";
import XmarkIcon from "./xmarkIcon";

interface HabitProps {
    habit : {
        habit : string,
        isDone : boolean,
        category : string,
        startingDate : string,
        endDate : string,
        description : string,
        priority : number,
    }
}

export default function Habit({habit} : HabitProps){
    return(
        <div className="border flex p-1 mx-auto w-[95%] sm:w-[90%] md:w-[60%] lg:w-[50%] my-2
        rounded-[5px]">
            <div className="flex w-[85%]">
                <div className="w-[24px] h-[24px] border flex-shrink-0
                my-auto mr-2 rounded-[5px]">

                </div>
                <div className="">
                    {habit.habit}
                </div>
            </div>

            <div className="flex justify-end w-[15%]">
                <div className="w-[24px] h-[24px] border flex-shrink-0
                my-auto mr-1 rounded-[5px]">
                    <CheckIcon/>
                </div>
                <div className="w-[24px] h-[24px] border flex-shrink-0
                my-auto mr-1 rounded-[5px]">
                    <XmarkIcon/>
                </div>
            </div>
        </div>
    )
}