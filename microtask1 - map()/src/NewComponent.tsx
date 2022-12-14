import React from "react";

type NewComponentType = {
    //students: Array<StudentType>
    students: StudentType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number
}





export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((objectFromStudentArray:StudentType) => {
                return (
                    <li key={objectFromStudentArray.id}>
                        <span>{objectFromStudentArray.name}</span>
                        <span> age:{objectFromStudentArray.age}</span>
                    </li>
                )
            })}

        </ul>
    )
}

