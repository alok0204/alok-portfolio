import { db } from '../db/prisma.js';

export async function submitContactMessage(req, res, next) {
  try {
    const { name, email, message } = req.body;

    // Secure database insertion into PostgreSQL / Prisma model ContactMessage
    const savedMessage = await db.createContactMessage({
      name,
      email,
      message,
    });

    console.log(`[Contact] New inquiry received from: ${name} <${email}> at ${savedMessage.createdAt}`);

    // Return success without exposing internal database keys or other messages
    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received and securely saved. I will respond as soon as possible.',
      data: {
        id: savedMessage.id,
        createdAt: savedMessage.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
}
