import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
const JWT_SECRET = process.env.JWT_SECRET ?? "";

const Users = [
    {
        username : 'vikas',
        password : '123'
    }
]

export const POST = async (req : NextRequest) => {
    const { username, password } = await req.json();

    // check if user already exist
    const userIndex = Users.findIndex(user => user.username === username);
    if(userIndex !== -1){
        return NextResponse.json(
            {msg : 'user already exist'},
            {status : 409}
        );
    }

    // generate token for new user
    const token = jwt.sign({
        username :  username
    }, JWT_SECRET)

    // set the response
    const res = NextResponse.json(
        {
            token : token
        }
    )

    // set the token in cookie
    res.cookies.set('token', token, 
        {
            httpOnly: true,
            secure: true,
            path: '/',
        }
    )
    
    // return response
    return res;
}
