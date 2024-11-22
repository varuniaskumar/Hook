import { useState, useEffect } from "react";
import './fetchdata.css';

export default function FetchData(){
    const [records, setRecords] = useState([ ]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((res) => setRecords(res))

    },[ ])
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>ID</th>
                    <th>Titlr</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {
                    records.map((val) => {
                        return(
                            <tr>
                                <td> {val.userId} </td>
                                <td> {val.id} </td>
                                <td> {val.title} </td>
                                <td> {val.body} </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}