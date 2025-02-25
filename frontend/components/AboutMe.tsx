import React from 'react'
import { Button } from './ui/button'

const AboutMe = () => {
  return (
    <div>
        
        <Button variant="title">About Me</Button>

        <div className='text-justify flex flex-col gap-4 mt-6 text-sm text-slate-600'>
            <p>Hello, I'm John Smith, a web designer with 15 years of expertise in crafting visually stunning and user-friendly digital experiences.</p>
            <p>My journey in web design began with a curiosity for how websites work and a desire to create something meaningful on the digital canvas. Over the years, I've honed my skills in user interface design, front-end development, and user experience optimization.</p>



        </div>

    </div>
  )
}

export default AboutMe