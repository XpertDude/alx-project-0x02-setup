import React from 'react';
import { type CardProps } from '@/interfaces/index'
const Card: React.FC<CardProps> = ({ title, content }) => {
    return <>
    <div className='w-50 h-50 flex flex-col justify-around p-2 m-1.5 bg-green-400 rounded-b-md max-w-sm'>
        <h1 className='text-blue-950 text-3xl'>{title}</h1>
        <div className='w-full h-50 p-0.5 border-2 border-t-white rounded-b-xl shadow-2xl'>{content}</div>
    </div>
    </>
}

export default Card