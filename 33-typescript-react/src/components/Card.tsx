import React from 'react'

interface CardProps {
    title : string;
    children: React.ReactNode; // 컴포넌트 안에 children을 담아낼 수 있는 props
}

export default function Card({title, children}: CardProps) {
    return (
        <div>
            <h1>{title}</h1>
            <div>{children}</div>
        </div>
    )
}