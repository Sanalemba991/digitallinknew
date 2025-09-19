'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiUser, FiLock, FiEye, FiEyeOff, FiShield, FiArrowRight } from 'react-icons/fi';
import hikvisionLogo from '../../../../public/logo.png';

export default function AdminLogin() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Login successful');
                router.push('/admin');
            } else {
                toast.error(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error('An error occurred during login');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.2, 0.4],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            <motion.div
                className="relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header Section */}
                <motion.div 
                    className="sm:mx-auto sm:w-full sm:max-w-md"
                    variants={itemVariants}
                >
                    <motion.div 
                        className="flex justify-center mb-8"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
                            <Image
                                src={hikvisionLogo}
                                alt="DigitalLink Technology Logo"
                                width={200}
                                height={60}
                                className="relative z-10 drop-shadow-lg"
                            />
                        </div>
                    </motion.div>

                    <motion.div 
                        className="text-center"
                        variants={itemVariants}
                    >
                        <div className="flex items-center justify-center mb-4">
                            <motion.div
                                className="bg-blue-600 p-3 rounded-full mr-3"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <FiShield className="w-6 h-6 text-white" />
                            </motion.div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Admin Portal
                            </h2>
                        </div>
                        <p className="text-gray-600 text-lg">
                            Secure access to your dashboard
                        </p>
                    </motion.div>
                </motion.div>

                {/* Login Form */}
                <motion.div 
                    className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
                    variants={itemVariants}
                >
                    <motion.div 
                        className="bg-white/80 backdrop-blur-lg py-8 px-4 shadow-2xl sm:rounded-2xl sm:px-10 border border-white/20"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Username Field */}
                            <motion.div variants={itemVariants}>
                                <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Username
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiUser className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <motion.input
                                        id="username"
                                        name="username"
                                        type="text"
                                        required
                                        value={credentials.username}
                                        onChange={handleChange}
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl bg-gray-50/50 
                                        shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 
                                        focus:border-transparent focus:bg-white sm:text-sm transition-all duration-300"
                                        placeholder="Enter your username"
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </div>
                            </motion.div>

                            {/* Password Field */}
                            <motion.div variants={itemVariants}>
                                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiLock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <motion.input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={credentials.password}
                                        onChange={handleChange}
                                        className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl bg-gray-50/50 
                                        shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 
                                        focus:border-transparent focus:bg-white sm:text-sm transition-all duration-300"
                                        placeholder="Enter your password"
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                    <motion.button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {showPassword ? (
                                            <FiEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <FiEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </motion.button>
                                </div>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.div variants={itemVariants}>
                                <motion.button
                                    type="submit"
                                    disabled={loading}
                                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent 
                                    rounded-xl shadow-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 
                                    hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 
                                    focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transform transition-all 
                                    duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                    whileHover={{ boxShadow: "0 20px 25px -5px rgb(59 130 246 / 0.4)" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        {loading ? (
                                            <motion.div 
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            />
                                        ) : (
                                            <FiShield className="h-5 w-5 text-blue-300 group-hover:text-white transition-colors duration-300" />
                                        )}
                                    </span>
                                    
                                    <span className="flex items-center">
                                        {loading ? 'Signing in...' : 'Sign in'}
                                        {!loading && (
                                            <motion.div
                                                className="ml-2"
                                                initial={{ x: 0 }}
                                                whileHover={{ x: 5 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            >
                                                <FiArrowRight className="w-4 h-4" />
                                            </motion.div>
                                        )}
                                    </span>
                                </motion.button>
                            </motion.div>
                        </form>

                        {/* Security Notice */}
                        <motion.div 
                            className="mt-6 pt-6 border-t border-gray-200"
                            variants={itemVariants}
                        >
                            <div className="flex items-center justify-center text-sm text-gray-500">
                                <FiShield className="w-4 h-4 mr-2 text-green-500" />
                                <span>Secured with enterprise-grade encryption</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Footer */}
                <motion.div 
                    className="mt-8 text-center"
                    variants={itemVariants}
                >
                    <p className="text-sm text-gray-600">
                        © 2024 DigitalLink Technology. All rights reserved.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}