import { NextResponse } from 'next/server';
import connectDB from '@/app/config/db';
import Product from '@/app/models/Product';
import Category from '@/app/models/Category';
import SubCategory from '@/app/models/SubCategory';
import NavbarCategory from '@/app/models/NavbarCategory';
import Contact from '@/app/models/Contact';
import Subscription from '@/app/models/Subscription';

export async function GET() {
    try {
        await connectDB();

        const [
            productsCount,
            categoriesCount,
            subcategoriesCount,
            navbarCategoriesCount,
            contacts,
            subscriptions
        ] = await Promise.all([
            Product.countDocuments(),
            Category.countDocuments(),
            SubCategory.countDocuments(),
            NavbarCategory.countDocuments(),
            Contact.find(),
            Subscription.find()
        ]);

        // Calculate contact message statistics
        const contactStats = {
            total: contacts.length,
            unread: contacts.filter(c => c.status === 'unread').length,
            pending: contacts.filter(c => c.status === 'pending').length,
            resolved: contacts.filter(c => c.status === 'resolved').length
        };

        // Calculate subscription statistics
        const subscriptionStats = {
            total: subscriptions.length,
            active: subscriptions.filter(s => s.isActive).length,
            inactive: subscriptions.filter(s => !s.isActive).length
        };

        return NextResponse.json({
            products: productsCount,
            categories: categoriesCount,
            subcategories: subcategoriesCount,
            navbarCategories: navbarCategoriesCount,
            contacts: contactStats,
            subscriptions: subscriptionStats
        });
    } catch (error) {
        console.error('Dashboard stats error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch dashboard statistics' },
            { status: 500 }
        );
    }
} 