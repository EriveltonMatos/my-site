import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Configure o transporter do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // seu email Gmail
        pass: process.env.EMAIL_APP_PASSWORD // senha de app gerada
      },
    });

    // Configure o email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'eriveltonsdmatos@gmail.com',
      subject: `Nova mensagem de ${name}`,
      text: `
        Nome: ${name}
        Email: ${email}
        
        Mensagem:
        ${message}
      `,
      html: `
        <h2>Nova mensagem do formulário de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `
    };

    // Envie o email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ message: 'Erro ao enviar email' });
  }
}