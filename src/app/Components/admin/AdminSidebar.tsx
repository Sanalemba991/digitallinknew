'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FiBox, FiHome, FiLogOut, FiMenu, FiX, FiList, FiGrid, FiMessageSquare, FiUser } from 'react-icons/fi';
import { useState } from 'react';
import { toast } from 'react-hot-toast';


const AdminSidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const menuItems = [
        { icon: FiHome, label: 'Dashboard', href: '/admin' },
        { icon: FiList, label: 'Navbar Category', href: '/admin/navbar' },
        { icon: FiGrid, label: 'Categories', href: '/admin/category' },
        { icon: FiBox, label: 'SubCategories', href: '/admin/subcategory' },
        { icon: FiBox, label: 'Products', href: '/admin/products' },
        { icon: FiMessageSquare, label: 'Contact', href: '/admin/contact' },
        { icon: FiBox, label: 'Subscription', href: '/admin/subscription' },
        { icon: FiUser , label: 'Carrers', href: '/admin/careers' },
    ];

    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message || 'Logged out successfully');
                router.push('/auth/login');
            } else {
                toast.error(data.message || 'Logout failed');
                console.error('Logout failed');
            }
        } catch (error) {
            toast.error('An error occurred during logout');
            console.error('Logout error:', error);
        } finally {
            setIsLoggingOut(false);
        }
    };

    return (
        <div className={`bg-gray-900 text-white transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} min-h-screen fixed left-0 top-0 z-50`}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                {!isCollapsed && <h1 className="text-xl font-bold text-blue-500">Digital Link Technology Saudi Arabia</h1>}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2 rounded-lg hover:bg-gray-700"

                >
                    {isCollapsed ? <FiMenu size={20} /> : <FiX size={20} />}
                </button>
            </div>

            {/* Navigation */}
            <nav className="p-4">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors ${pathname === item.href
                                    ? 'bg-blue-600 text-white'
                                    : 'hover:bg-gray-700'
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            {!isCollapsed && <span>{item.label}</span>}
                        </Link>
                    );
                })}
            </nav>

            {/* Beautiful Logout Button */}
            <div className="absolute bottom-0 w-full p-4 border-t border-gray-700 bg-gradient-to-t from-gray-900 to-transparent">
                <button 
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className={`
                        relative group flex items-center justify-center gap-3 w-full p-3 rounded-xl
                        bg-gradient-to-r from-red-500 to-red-600 
                        hover:from-red-600 hover:to-red-700 
                        disabled:from-gray-600 disabled:to-gray-700
                        text-white font-medium shadow-lg hover:shadow-xl
                        transform hover:scale-[1.02] active:scale-[0.98]
                        transition-all duration-200 ease-in-out
                        border border-red-400/30 hover:border-red-300/50
                        ${isLoggingOut ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}
                        ${isCollapsed ? 'px-2' : 'px-4'}
                    `}
                >
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-400/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    
                    {/* Content */}
                    <div className="relative flex items-center gap-3">
                        {isLoggingOut ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <FiLogOut className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-200" />
                        )}
                        
                        {!isCollapsed && (
                            <span className="font-semibold tracking-wide">
                                {isLoggingOut ? 'Logging out...' : 'Logout'}
                            </span>
                        )}
                    </div>

                    {/* Ripple effect on click */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-active:opacity-20 bg-white transition-opacity duration-150"></div>
                </button>

                {/* Optional: Add a subtle admin info section when expanded */}
                {!isCollapsed && (
                    <div className="mt-3 pt-3 border-t border-gray-700/50">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span>Admin Session Active</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminSidebar;