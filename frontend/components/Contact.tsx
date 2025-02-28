import React, { useState } from 'react';

const Contact = () => {
    const [dadosForm, setDadosForm] = useState<{ nome: string; email: string; mensagem: string }>({ nome: '', email: '', mensagem: '' });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        setDadosForm(data as { nome: string; email: string; mensagem: string });
        console.log("dados enviados", data);
    };

    return (
        <div className=' max-w-[600px] mx-auto  '>
            <form onSubmit={(e) => {
                handleSubmit(e);
                setDadosForm({ nome: '', email: '', mensagem: '' });
                e.currentTarget.reset();
                alert("Enviado")
            }}>
                <label className='flex flex-col gap-3 lg:gap-4 xl:gap-5'>
                    <input 
                        required 
                        type="text" 
                        name="nome" 
                        placeholder='Seu Nome' 
                        className='bg-slate-200 text-slate-600 pl-2 border-[1.5px] border-slate-300 rounded-md w-full h-10 sm:h-11 md:h-12 text-sm sm:text-base' 
                    />
                    <input 
                        required 
                        type="email" 
                        name="email" 
                        placeholder='Seu E-mail' 
                        className='bg-slate-200 text-slate-600 pl-2 border-[1.5px] border-slate-300 rounded-md w-full h-10 sm:h-11 md:h-12 text-sm sm:text-base' 
                    />
                    <textarea 
                        required 
                        name="mensagem" 
                        className='bg-slate-200 text-slate-600 pl-2 border-[1.5px] border-slate-300 rounded-md w-full h-32 sm:h-36 md:h-40 text-sm sm:text-base' 
                    />
                    <button 
                        type="submit" 
                        className='bg-slate-800 py-2 sm:py-3 text-white rounded-md hover:bg-slate-600 text-sm sm:text-base'
                    >
                        Enviar
                    </button>
                </label>
            </form>
        </div>
    );
};

export default Contact;
