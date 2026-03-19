import React, { useEffect, useState } from 'react';

const A1 = () => {

    const [c, setC] = useState(0);
    const [c1, setCc] = useState(10);

    const a = () => {
        console.log("A paisi")
    }
    const b = () => {
        console.log("B paisi")
    }

    useEffect(() => {
        a()
    },[c])
    useEffect(() => {
        b()
    },[c1])

    return (
        <div>
            <h1 className='text-4xl font-bold'>Value A is = {c}</h1>
            <h1 className='text-4xl font-bold'>Value B is = {c1}</h1>
            <button onClick={() => {
                setC(c => c+1)
            }} 
            className='btn btn-success'>Click A</button>
            <button onClick={() => {
                setCc(c => c-1)
            }} 
            className='btn btn-error'>Click B</button>
        </div>
    );
};

export default A1;