import React from "react";
import './NewCarComponent.css';

type NewCarComponentType = {
    topCars: TopCarType[]
}

type TopCarType = {
    manufacturer:string,
    model:string
}

// <table>
//     <tr>
//         <th>Company</th>
//         <th>Contact</th>
//         <th>Country</th>
//     </tr>
//     <tr>
//         <td>Alfreds Futterkiste</td>
//         <td>Maria Anders</td>
//         <td>Germany</td>
//     </tr>
//     <tr>
//         <td>Centro comercial Moctezuma</td>
//         <td>Francisco Chang</td>
//         <td>Mexico</td>
//     </tr>
// </table>

// export const NewCarComponent = (props: NewCarComponentType) => {
//     return (
//         <ul>
//             {props.topCars.map((objectFromCar:TopCarType, index) => {
//                 return (
//                     <li key={index}>
//                         <span>model: {objectFromCar.model} </span>
//                         <span>manufacturer: {objectFromCar.manufacturer} </span>
//                     </li>
//                 )
//             })
//             }
//         </ul>
//     )
// }

export const NewCarComponent = (props: NewCarComponentType) => {
    return (
        <table>
            <tr>
                <th>#</th>
                <th>model</th>
                <th>manufacturer</th>
            </tr>

            {props.topCars.map((objectFromCar:TopCarType, index) => {
                return (
                    <tr key={index}>
                        <th>{index+1}</th>
                        <th>{objectFromCar.model}</th>
                        <th>{objectFromCar.manufacturer}</th>
                    </tr>
                )
            })
            }

        </table>
    )
}
