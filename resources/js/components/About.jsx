import React, { useEffect, useState } from 'react'



export default function About() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);
  return (
    <div>
            {data ? (
                <div>
                    <h1>{data.name}</h1>
                    <p>{data.email}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
  )
}
