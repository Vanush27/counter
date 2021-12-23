import {useEffect, useState} from "react";

function CountHome() {

    const [data, setData] = useState()

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setData(json))

    }, [])

    return (
        <>
            {
                data && <div>{data.title}</div>

            }
        </>
    )
}

export default CountHome