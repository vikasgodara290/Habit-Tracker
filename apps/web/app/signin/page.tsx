import Input from "@repo/ui/input";
import { useRef } from "react";

export default function Home(){

    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    return (
        <div className="">
            <div className="">
                <Input type="text" ref={userNameRef}/>
            </div>
            <div className="">
                <Input type="password" ref={passwordRef}/>
            </div>
            <div className="">
                <button>Sign in to Habit Tracker</button>
            </div>
        </div>
    )
}