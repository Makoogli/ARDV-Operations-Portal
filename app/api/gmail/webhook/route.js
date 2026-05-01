import { NextResponse } from 'next/server'

export async function POST(req){
    try {
        console.log("email received");
        console.log(req);
    } catch (err) {
        return NextResponse.json({message:'Server Error'},{status:500});
    }
    return NextResponse.json({ message: 'Received' }, { status: 200 });
}