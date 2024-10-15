import { ServerClient } from 'postmark';

const client = new ServerClient(process.env.POSTMARK_API_KEY);

export async function POST(req) {
  const { name, surname, email, message, checkbox } = await req.json();

  const msg = {
    From: 'info@tob.codes', // L'email da cui vuoi inviare
    To: 'info@tob.codes', // La tua email dove vuoi ricevere i messaggi
    Subject: `Messaggio da ${name} ${surname}`,
    TextBody: `Hai ricevuto un nuovo messaggio:\n\nNome: ${name} ${surname}\nEmail: ${email}\nMessaggio: ${message}\nInformativa: ${checkbox}`,
  };

  try {
    await client.sendEmail(msg);
    return new Response(JSON.stringify({ status: 'success' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    return new Response(JSON.stringify({ status: 'error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

