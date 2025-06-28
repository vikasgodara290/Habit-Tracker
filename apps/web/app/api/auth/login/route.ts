import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
const JWT_SECRET = process.env.JWT_SECRET ?? "";

export const POST = async (req : NextRequest) => {
    const { username, password } = await req.json();
    
    const token = jwt.sign({
        username :  username
    }, JWT_SECRET)

    const res = NextResponse.json(
        {
            token : token
        }
    )

    res.cookies.set('token', token, 
        {
            httpOnly: true,
            secure: true,
            path: '/',
        }
    )
    
    return res;
}
