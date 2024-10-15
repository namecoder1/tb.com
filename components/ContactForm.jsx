'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: '',
		checkbox: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('✅ Messaggio inviato con successo!');
      setFormData({ name: '', surname: '', email: '', message: '', checkbox: '' });
    } else {
      setStatus('⚠️ Errore nell\'invio del messaggio.');
    }
  };

  return (
			<>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 my-10 '>
        <div className='flex gap-4'>
					<Input type='text' name='name' placeholder="Nome" value={formData.name} onChange={handleChange} required />
					<Input type='text' name='surname' placeholder="Cognome" value={formData.surname} onChange={handleChange} required />
        </div>
        <div>
						<Input type='email' name='email' placeholder="Email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
            <Textarea name='message' placeholder="Scrivi il tuo messaggio" value={formData.message} onChange={handleChange} required />
        </div>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
					<div className='flex gap-2 items-start justify-center'>
						<Checkbox name='checkbox' defaultChecked />
						<p className='max-w-[200px] text-[10px]'>*Compilando e inviando questo modulo di richiesta, autorizzo il trattamento dei miei dati personali ai sensi dell’attuale normativa e confermo di aver preso visione dell’informativa privacy.</p>
					</div>
					<div>
						<Button type='submit' variant='outline' className='mx-auto w-fit'>Invia</Button>
					</div>
				</div>	
      </form>
      {status && (
				<div className='fixed z-10 bottom-4 left-4 bg-transparent border-[1px] py-2 px-4 rounded-xl backdrop-blur'>
					<p>{status}</p>
				</div>
			)}
			</>
  );
}
