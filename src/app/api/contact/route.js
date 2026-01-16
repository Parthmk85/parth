import connectToDatabase from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    await connectToDatabase();
    const body = await req.json();
    
    // Basic validation
    if (!body.fullname || !body.email || !body.message) {
      return NextResponse.json(
        { message: 'All fields are required' }, 
        { status: 400 }
      );
    }

    const newContact = await Contact.create(body);

    return NextResponse.json(
      { message: 'Message sent successfully!', data: newContact },
      { status: 201 }
    );

  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json(
      { message: 'Something went wrong!' },
      { status: 500 }
    );
  }
}
