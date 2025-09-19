import { NextResponse } from 'next/server';
import connectDB from '@/app/config/db';
import Subscription from '@/app/models/Subscription';

export async function POST(request: Request) {
  try {
    await connectDB();
    const { email } = await request.json();

    // Check if email already exists
    const existingSubscription = await Subscription.findOne({ email });
    if (existingSubscription) {
      return NextResponse.json(
        { message: 'Email already subscribed' },
        { status: 400 }
      );
    }

    // Create new subscription
    await Subscription.create({ email });
    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 201 }
    );

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { message: 'Failed to subscribe' },
      { status: 500 }
    );
  }

}

export async function GET() {
  try {
    await connectDB();
    const subscriptions = await Subscription.find({}).sort({ createdAt: -1 });
    return NextResponse.json(subscriptions);
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { message: 'Failed to fetch subscriptions' },
      { status: 500 }
    );
  }
} 