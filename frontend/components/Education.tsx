import React from 'react'
import { Button } from './ui/button'
import { MapPin } from 'lucide-react'

const Education = () => {
  return (
    <div className='text-sm'>
        
        <Button className='mb-4' variant="title">Educação</Button>
            <div className='border-l-2 px-6'>
                <div className='flex w-full text-slate-500 justify-between '>
                    <p className='flex items-center '><MapPin size={16}/>Cuiabá, MT</p> 
                    <p >2022-2026</p>
                </div>
                <p className='mt-2 font-semibold text-slate-600'>Bacharelado em Sistemas de Informação</p>
                <p className='text-slate-500'>Universidade Federal de Mato Grosso</p>

                <p className='text-slate-500 mt-4'>Focused on advanced web technologies, user experience design, and front-end development.</p>
            </div>


    </div>
  )
}

export default Education