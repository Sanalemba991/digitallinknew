import { NextResponse } from 'next/server';
import connectDB from '@/app/config/db';
import Subscription from '@/app/models/Subscription';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = params;
    const { status } = await request.json();

    const subscription = await Subscription.findByIdAndUpdate(
      id,
      { isActive: status === 'active' },
      { new: true }
    );

    if (!subscription) {
      return NextResponse.json(
        { message: 'Subscription not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(subscription);
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { message: 'Failed to update subscription' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = params;

    const subscription = await Subscription.findByIdAndDelete(id);

    if (!subscription) {
      return NextResponse.json(
        { message: 'Subscription not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Subscription deleted successfully' });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { message: 'Failed to delete subscription' },
      { status: 500 }
    );
  }
} 