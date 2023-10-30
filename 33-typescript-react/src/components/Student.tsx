import React from 'react'

interface StudentInfo {
    name : string;
    grade : number;
    part? : string;
    handleClick: (name : string, grade : number) => void;
}

// type StudentInfo {
//     name: string;
//     grade: string;
// }

// export default function Student({}) {
//     return <div>Students</div>
// }

// React.FC를 사용할 때는 Generic을 사용해서 props 타입을 표현한다.
const Student: React.FC<StudentInfo> = ({name , grade, part, handleClick}) => {
    return <div
        onClick={() => {handleClick(name, grade)}}
    >
        {name}
        <br />
        {grade}
        <br />
        {part || '자유전공'}
    </div>
}
export default Student