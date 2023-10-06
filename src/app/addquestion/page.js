import React from 'react'
import './addquestion.css';

export default function addquestion() {
    return (
        <div className='container question-form'>
            <h2 className='text-center mb-3 add-word'>Add question</h2>
            <form className='m-auto d-grid'>
                <input type='text' placeholder='Add question here' className='w-50 p-2 rounded border-0 bg-light m-auto'></input>
                {/* <input type='text' placeholder='Add answer here' className='w-50 p-2 rounded border-0 bg-light m-auto mt-3'></input> */}
                <button type='submit' className='add-button'>Add</button>
            </form>
        </div>
    )
};
