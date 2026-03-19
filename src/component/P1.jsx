import React, { useEffect, useState } from 'react';
import axios from "axios"
import P2 from './P2';
import P3 from './P3';
import PaginationRounded from './P4';

const P1 = () => {

    const [c, setC] = useState([]);
    const [loading, setL] = useState(true);
    const [i, setI] = useState(1)

    const a = async () => {
        setL(true)
        const b = await axios.get(`https://picsum.photos/v2/list?page=${i}&limit=10`)
        setC(b.data);
        console.log(b)
        setL(false)
    }

    useEffect(() => {
            a()
    },[i])

    if(loading) return <h1 className='text-3xl font-bold my-70 text-center'>Loading....</h1> 

    // let user = <h1 className='text-3xl font-bold my-10 text-center col-span-full'>No User Available</h1>

    // if(c.length>0){
    //     user = c.map(v => <P2 key={v.id} {...v}></P2>)
    // }

    return (
        <div className='max-w-[90%] mx-auto my-7'>
            <div className='my-7 flex justify-center'>
                <P3></P3>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-center">JS Modal</h3>
                <p className="py-4 text-center">You have the opened this modal Successfully!!!!🌃🌃🌃</p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-error">Close</button>
                </form>
                </div>
            </div>
            </dialog>
            </div>
            {/* <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {user}
            </div> */}
            <div className='flex justify-center flex-wrap gap-5'>
                {
                    c.length===0 ? 
                    <h1 className='text-3xl font-bold my-10 text-center'>No User Available</h1> 
                    : c.map(v => <P2 key={v.id} {...v}></P2>)
                }
            </div>
            <div className='flex justify-center items-center gap-4 my-5'>
                <button onClick={() => {
                    if(i>1) setI(v => v-1)
                }} className={`btn btn-warning font-bold ${i===1? "opacity-50": "opacity-100"}`}>Prev</button>
                <h1>Page {i}</h1>
                <button onClick={() => setI(v => v+1)} className='btn btn-warning font-bold'>Next</button>
            </div>
            <PaginationRounded page={i} setPage={setI} count={10}></PaginationRounded>
        </div>
    );
};

export default P1;