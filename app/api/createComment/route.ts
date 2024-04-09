import { client } from '@/sanity/lib/client';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { _id, name, email, comment } = await request.json(); // request the data

  try {
    await client.create({
        _type: "comment",
        post: {
            _type: "reference",
            _ref: _id
        },
        name,
        email,
        comment
    });
    return NextResponse.json({ message: 'Message Sent Successfully' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}