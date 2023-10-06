"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './questionanswer.css';

export default function QuestionAnswer() {

  const [isAnsShowing, setAnsShowing] = useState(false);
  const ansShowHandler = () => {
    setAnsShowing(!isAnsShowing);
  }

  return (
    <div className='qus-ans'>
      <div className='display-grid'>
        <Link href="/addquestion" className='add'><button className='btn btn-primary'>Add Question</button></Link>
        <div>
          <h1 className='text-center mt-2 question'>What is your name?</h1>
          <button className={isAnsShowing ? 'btn btn-danger text-white show-hide' : 'btn btn-info text-white show-hide'} onClick={ansShowHandler}>{isAnsShowing ? 'Hide Answer' : 'Show Answer'}</button>
          {/* {
            isAnsShowing ? <p className='text-center mt-3'>Answer</p>
              :
              ""
          } */}
          <div className='justify-content-around d-flex m-5'>
            <button className='btn btn-success'>Edit <i class="fas fa-edit ms-2"></i></button>
            <button className='btn btn-danger'>Delete <i class="fa fa-trash ms-2" aria-hidden="true"></i></button>
          </div>
          <div className='d-flex justify-content-around'>
            <button className='btn btn-light'><i class="fa-solid fa-arrow-left"></i> Previous</button>
            <button className='btn btn-light'>Next <i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}
