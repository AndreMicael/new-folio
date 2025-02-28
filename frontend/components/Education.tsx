import React from 'react'
import { Button } from './ui/button'
import { MapPin } from 'lucide-react'

const Education = () => {
  return (
    <div className='text-sm  w-[40vw] mx-auto md:text-base lg:text-[15px] xl:text-[16px] 2xl:text-[17px]'>
      <div className='border-l-2 px-6 lg:px-8 xl:px-12'>
        <div className='flex text-slate-500 justify-between'>
          <p className='flex items-center'><MapPin size={16} className='mr-2'/>Cuiabá, MT</p>
          <p>2022-2026</p>
        </div>
        <p className='mt-2 font-semibold text-slate-600 text-base md:text-lg lg:text-[17px] xl:text-[18px]'>Bacharelado em Sistemas de Informação</p>
        <p className='text-slate-500'>Universidade Federal de Mato Grosso</p>
        <p className='text-slate-500 mt-4'>Focused on advanced web technologies, user experience design, and front-end development.</p>
      </div>
    </div>
  )
}

export default Education