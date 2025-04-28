import React, { useEffect, useState } from 'react'

const DataFechter = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            {
                loading ?
                    <p>Loading...</p> :
                    <ul>
                        {
                            data.map((item, index) =>
                                <li key={index}>{item.title}</li>
                            )
                        }
                    </ul>
            }
        </div>
    )
}

export default DataFechter