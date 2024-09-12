import React from 'react'
import logo from "../assets"

const Intro = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3 '>
        <img src={logo} alt="logo" className='w-28 object-contain' />
        <button type='button' className='btn-primary' onClick={()=>window.open('https://github.com/Hajer45/AI-Summarizer')} >
          Github
        </button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles with <br className='mx-md:hidden'/>
        <span className='violet_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Make your reading easier with Summize, an open-source tool that converts long 
      articles into brief, straightforward summaries.
      </h2>
    </header>
  )
}

export default Intro