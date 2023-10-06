"use client";
import Image from 'next/image'
import styles from './page.module.css'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {

  const [isAnsShowing, setAnsShowing] = useState(false);
  const ansShowHandler = () => {
    setAnsShowing(!isAnsShowing);
  }

  const [question, setQuestion] = useState([])
  useEffect(() => {
    async function questionHandler() {
      const response = await fetch(`http://localhost:3000/api/questions`, {
        method: 'GET',

      });
      const finaldata = await response.json();
      setQuestion(finaldata);

    }
    questionHandler()
  }, []);

  const [answer, setAnswer] = useState([])
  useEffect(() => {
    async function answerHandler() {
      const response = await fetch(`http://localhost:3000/api/answers`, {
        method: 'GET',
      });
      const finaldata = await response.json();
      setAnswer(finaldata);
    }
    answerHandler()
  }, []);

  return (
    <div className='container login-div'>
      <h2 className='text-center'>Login</h2>
      <form className='mt-5 w-75 mx-auto'>
        <div className="form-group mb-3">
          <label for="formGroupExampleInput" className='mb-1'>User name</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your name or email"/>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2" className='mb-1'>Password</label>
          <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Enter your password"/>
        </div>
      </form>
      <Link href='/questionanswer'><button className='mt-5 w-75 login'>Login</button></Link>
      <p className='text-center mt-3'><Link href="/register" className='register-p'>Create new account</Link></p>
      <div className='d-flex justify-content-center'>
        <button className='facebook'><i class="fa-brands fa-facebook-f"></i></button>
        <button className='instagram'><i class="fa-brands fa-instagram"></i></button>
        <button className='twitter'><i class="fa-brands fa-twitter"></i></button>
      </div>
    </div>
  )
}