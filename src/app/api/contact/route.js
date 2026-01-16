import connectToDatabase from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    console.log("Contact API endpoint hit"); // Debug log
    await connectToDatabase();
    console.log("Database connection attempted"); // Debug log
    const body = await req.json();
    console.log("Request body received:", body); // Debug log
    
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
