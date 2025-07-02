'use client'

import Input from "@repo/ui/input";
import Button from "@repo/ui/button";
import { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const url = 'http://localhost:3000';

export default function Home(){
    const router = useRouter();
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSignIn = async () => {
        const username = userNameRef.current?.value;
        const password = passwordRef.current?.value;
        if(!username || !password){
            alert('please enter username and password!');
            return;
        }
        try{
            const res = await axios.post(`${url}/api/auth/login`, {
                username : userNameRef.current?.value,
                password : passwordRef.current?.value
            })

            if(res.status === 200){
                router.push('/dashboard')
                return;
            }
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
            const status = error.response?.status;
            const message = error.response?.data?.msg || error.message;
            alert(message);
            console.log(`Login failed with status ${status}: ${message}`);
            } else {
            console.log('Unexpected error during login:', error);
            }
        }
        
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
                <Button text="Sign In To Habit Tracker" onclick={handleSignIn}/>
            </div>
        </div>
    )
}