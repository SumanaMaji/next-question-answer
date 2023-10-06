import React from 'react'
import Link from 'next/link';
import './registerpage.css';

export default function page() {
  return (
    <div className='container login-div'>
      <h2 className='text-center'>Register</h2>
      <form className='mt-5 w-75 mx-auto'>
        <div className="form-group mb-3">
          <label for="formGroupExampleInput" className='mb-1'>User name</label>
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your name or email"/>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2" className='mb-1'>Email</label>
          <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Enter your email"/>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2" className='mb-1'>Password</label>
          <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Enter your password"/>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2" className='mb-1'>Confirm Password</label>
          <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Enter your password"/>
        </div>
      </form>
      <button className='mt-5 w-75 register'>Register</button>
      <p className='text-center mt-3'><Link href='/' className='login-p'>If you already sign-in then login here</Link></p>
      <div className='d-flex justify-content-center'>
        <button className='facebook'><i class="fa-brands fa-facebook-f"></i></button>
        <button className='instagram'><i class="fa-brands fa-instagram"></i></button>
        <button className='twitter'><i class="fa-brands fa-twitter"></i></button>
      </div>
    </div>
  )
}
