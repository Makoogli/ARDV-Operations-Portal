"use client";

import { useRouter } from 'next/navigation';

export function OperationsShortcut({name,src}){
    const router = useRouter();
    return (
        <button className="operationsShortcut" onClick={()=>router.push(src)}>{name}</button>
    );
}