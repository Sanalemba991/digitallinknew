'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import Head from 'next/head';

interface NavbarCategory {
    _id: string;
    name: string;
    slug: string;
    order: number;
    isActive: boolean;
    title?: string;
    description?: string;
}

interface Category {
    _id: string;
    name: string;
    slug: string;
    navbarCategory: string;
    description?: string;
    image?: string;
}

// Enhanced Breadcrumb component
const Breadcrumb = ({ category }: { category: NavbarCategory | null }) => {
    return (
        <nav className="bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200/50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
                <ol className="flex items-center space-x-3 text-sm font-medium">
                    <li>
                        <Link
                            href="/"
                            className="text-gray-600 hover:text-blue-700 transition-all duration-200 hover:underline underline-offset-2"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </li>
                    <li>
                        <span className="text-blue-700 font-semibold">
                            {category?.name || 'Loading...'}
                        </span>
                    </li>
                </ol>
            </div>
        </nav>
    );
};

// Enhanced Schema Component with better structure
const CategorySchema = ({ category, categories }: { category: NavbarCategory | null, categories: Category[] }) => {
    if (!category) return null;

    const schemaData = {
        '@context': 'https://schema.org',
        '@type': ['CollectionPage', 'Product'],
        '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/${category.slug}`,
        'name': category.title || `${category.name} Solutions - Digital Link Technology Saudi Arabia`,
        'headline': category.title || `${category.name} Security Solutions in Saudi Arabia`,
        'description': category.description || `Advanced ${category.name} security solutions optimized for Saudi Arabia. Discover comprehensive security systems for your needs.`,
        'brand': {
            '@type': 'Brand',
            'name': 'Digital Link Technology'
        },
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/${category.slug}`
        },
        'datePublished': '2024-01-01T08:00:00+04:00',
        'dateModified': new Date().toISOString(),
        'image': {
            '@type': 'ImageObject',
            'url': `${process.env.NEXT_PUBLIC_SITE_URL}/images/${category.slug}.jpg`,
            'width': 1200,
            'height': 630
        },
        'offers': {
            '@type': 'AggregateOffer',
            'priceCurrency': 'SAR',
            'lowPrice': '999.00',
            'highPrice': '9999.00',
            'offerCount': categories.length,
            'availability': 'https://schema.org/InStock'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '156',
            'bestRating': '5',
            'worstRating': '1'
        },
        'review': [
            {
                '@type': 'Review',
                'reviewRating': {
                    '@type': 'Rating',
                    'ratingValue': '5',
                    'bestRating': '5'
                },
                'author': {
                    '@type': 'Organization',
                    'name': 'Security Systems Weekly'
                },
                'datePublished': '2024-03-01',
                'reviewBody': `Outstanding ${category.name} security solutions from Digital Link Technology. Perfect for Saudi Arabia conditions and requirements.`
            }
        ],
        'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
                {
                    '@type': 'ListItem',
                    'position': 1,
                    'item': {
                        '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/`,
                        'name': 'Home',
                        'url': process.env.NEXT_PUBLIC_SITE_URL
                    }
                },
                {
                    '@type': 'ListItem',
                    'position': 2,
                    'item': {
                        '@id': `${process.env.NEXT_PUBLIC_SITE_URL}/${category.slug}/`,
                        'name': category.name,
                        'url': `${process.env.NEXT_PUBLIC_SITE_URL}/${category.slug}`
                    }
                }
            ]
        },
        'hasPart': categories.map(subCategory => ({
            '@type': 'Product',
            'name': subCategory.name,
            'description': subCategory.description,
            'url': `${process.env.NEXT_PUBLIC_SITE_URL}/${category.slug}/${subCategory.slug}`,
            'image': subCategory.image || undefined
        })),
        'provider': {
            '@type': 'Organization',
            'name': 'Digital Link Technology Saudi Arabia',
            'url': process.env.NEXT_PUBLIC_SITE_URL,
            'logo': {
                '@type': 'ImageObject',
                'url': `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`
            },
            'sameAs': [
                'https://www.linkedin.com/company/',
                'https://twitter.com/'
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
};

// Enhanced SEO Component
const SEOHead = ({ category }: { category: NavbarCategory | null }) => {
    if (!category) return null;

    const title = category.title || `${category.name} Solutions - Digital Link Technology Saudi Arabia`;
    const description = category.description || `Explore our range of Digital Link Technology ${category.name} solutions and products in Saudi Arabia. Official Digital Link Technology distributor in Kingdom of Saudi Arabia.`;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            
            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}/${category.slug}`} />
            <meta property="og:site_name" content="Digital Link Technology Saudi Arabia" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`} />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`} />
            
            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="geo.region" content="SA" />
            <meta name="geo.placename" content="Saudi Arabia" />
            <meta name="geo.position" content="24.7136;46.6753" />
            <meta name="ICBM" content="24.7136, 46.6753" />
            
            {/* Canonical */}
            <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}/${category.slug}`} />
        </Head>
    );
};

// Professional Loading Component
const LoadingSpinner = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <Breadcrumb category={null} />
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="flex flex-col items-center gap-6">
                <div className="relative">
                    <div className="animate-spin rounded-full h-20 w-20 border-4 border-gray-200"></div>
                    <div className="animate-spin rounded-full h-20 w-20 border-4 border-t-blue-600 border-r-transparent absolute top-0"></div>
                </div>
                <div className="text-center">
                    <p className="text-xl font-medium text-gray-700 animate-pulse">Loading Categories</p>
                    <p className="text-sm text-gray-500 mt-2">Please wait while we fetch the latest information</p>
                </div>
            </div>
        </div>
    </div>
);

export default function NavbarCategoryPage() {
    const params = useParams()
    const navbarCategory = params.navbarCategory as string
    const [categories, setCategories] = useState<Category[]>([]);
    const [navbarCategoryDetails, setNavbarCategory] = useState<NavbarCategory | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const navbarResponse = await fetch(`/api/navbar-categories/slug/${navbarCategory}`);
                if (!navbarResponse.ok) {
                    notFound();
                    return;
                }
                const navbarData = await navbarResponse.json();
                setNavbarCategory(navbarData);

                const categoriesResponse = await fetch(`/api/categories?navbarCategory=${navbarData._id}`);
                if (!categoriesResponse.ok) {
                    notFound();
                    return;
                }
                const categoriesData = await categoriesResponse.json();
                setCategories(categoriesData);
            } catch (error) {
                console.error('Error fetching data:', error);
                notFound();
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [navbarCategory]);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <SEOHead category={navbarCategoryDetails} />
            <CategorySchema category={navbarCategoryDetails} categories={categories} />

            <Breadcrumb category={navbarCategoryDetails} />
            
            {/* Enhanced Hero Section */}
            <div className="relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148,163,184)_1px,transparent_0)] bg-[size:24px_24px]"></div>
                </div>
                
                <div className="relative">
                    {/* Main Title Section */}
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8 text-center">
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                                <span className="text-gray-900">Digital</span>
                                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">Link</span>
                            </h1>
                            
                            <div className="relative">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-2">
                                    {navbarCategoryDetails?.title || `${navbarCategoryDetails?.name} Solutions`}
                                </h2>
                                <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Description Section */}
                    {navbarCategoryDetails?.description && (
                        <div className="relative">
                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900"></div>
                            
                            {/* Overlay Pattern */}
                            <div className="absolute inset-0 bg-black/10"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
                            
                            <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-16">
                                <div className="text-center">
                                    <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-light tracking-wide">
                                        {navbarCategoryDetails.description}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Wave */}
                            <div className="absolute bottom-0 left-0 right-0">
                                <svg viewBox="0 0 1440 120" className="w-full h-8 text-white">
                                    <path fill="currentColor" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,58.7C1120,53,1280,43,1360,37.3L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                                </svg>
                            </div>
                        </div>
                    )}

                    {/* Introduction Section */}
                    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 text-center">
                        <div className="space-y-6">
                            {/* Decorative Elements */}
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
                                <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                                <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                                Explore Our Exclusive Range
                            </h3>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Discover cutting-edge solutions tailored for the Saudi Arabian market, 
                                backed by industry-leading technology and exceptional service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Categories Grid Section */}
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category) => (
                            <Link
                                href={`/${navbarCategory}/${category.slug}`}
                                key={category._id}
                                className="group"
                            >
                                <div className="group relative">
                                    {/* Card */}
                                    <div className="bg-white rounded-2xl p-6 transition-all duration-300 
                                        shadow-[0_0_20px_rgba(0,0,0,0.05)] 
                                        hover:shadow-[0_0_25px_rgba(0,0,0,0.2)]
                                        border border-slate-100 hover:border-blue-100">

                                        {/* Image Wrapper */}
                                        <div className="relative h-48 mb-6 bg-gradient-to-b from-blue-50/50 to-transparent rounded-xl p-4">
                                            <div className="absolute inset-0 bg-blue-50/30 rounded-xl transform rotate-3 scale-95 transition-transform duration-300 group-hover:rotate-6"></div>
                                            <div className="absolute inset-0 bg-white/80 rounded-xl transform -rotate-3 scale-95 transition-transform duration-300 group-hover:-rotate-6"></div>
                                            {category.image ? (
                                                <img
                                                    src={category.image}
                                                    alt={category.name}
                                                    className="relative h-full w-full object-contain p-4 transform transition-transform duration-300 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="relative h-full w-full flex items-center justify-center">
                                                    <div className="text-2xl font-bold text-blue-600/80">{category.name}</div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="relative">
                                            <h2 className="text-xl font-semibold text-slate-800 mb-3 text-center">
                                                {category.name}
                                            </h2>

                                            {category.description && (
                                                <p className="text-gray-600 text-sm mb-4 text-center line-clamp-2">
                                                    {category.description}
                                                </p>
                                            )}

                                            {/* Button */}
                                            <div className="flex items-center justify-center space-x-2 text-blue-600">
                                                <span className="relative">
                                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                                    <span className="font-medium">View Products</span>
                                                </span>
                                                <svg
                                                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                    />
                                                </svg>
                                            </div>

                                            {/* Corner Accent */}
                                            <div className="absolute -top-2 -right-2 w-8 h-8">
                                                <div className="absolute inset-0 transform rotate-45 translate-x-4 -translate-y-4 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Effects */}
                                    <div className="absolute inset-0 -z-10 bg-blue-600 rounded-2xl opacity-0 group-hover:opacity-5 transform scale-90 group-hover:scale-100 transition-all duration-300"></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
 
   
    );
} 