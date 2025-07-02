'use client'

import Input from "@repo/ui/input";
import Button from "@repo/ui/button";
import { useRef } from "react";

export default function Home(){

    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSignUp = () => {
        
    }

    return (
        <div className="">
            <div className="">
                <Input type="text" ref={userNameRef}/>
            </div>
            <div className="">
                <Input type="password" ref={passwordRef}/>
            </div>
            <div className="">
                <Button text="Sign Up To Habit Tracker" onclick={handleSignUp}/>
            </div>
        </div>
    )
}