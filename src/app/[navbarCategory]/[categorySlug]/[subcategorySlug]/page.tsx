'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';

interface Product {
    _id: string;
    name: string;
    description: string;
    image1: string;
    image2?: string;
    image3?: string;
    navbarCategory: {
        name: string;
        slug: string;
    };
    category: {
        name: string;
        slug: string;
    };
    subcategory: {
        name: string;
        slug: string;
    };
    slug: string;
}

interface SubCategory {
    _id: string;
    name: string;
    slug: string;
    description?: string;
    image?: string;
}

interface BreadcrumbProps {
    navbarCategory: {
        name: string;
        slug: string;
    };
    category: {
        name: string;
        slug: string;
    };
    subcategory: {
        name: string;
        slug: string;
    };
}

// Enhanced Breadcrumb Component
const Breadcrumb = ({ navbarCategory, category, subcategory }: BreadcrumbProps) => {
    return (
        <nav className="bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200/50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
                <ol className="flex items-center space-x-3 text-sm font-medium">
                    <li>
                        <Link
                            href="/"
                            className="text-gray-600 hover:text-blue-700 transition-all duration-200 hover:underline underline-offset-2 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </li>
                    <li>
                        <Link
                            href={`/${navbarCategory.slug}`}
                            className="text-gray-600 hover:text-blue-700 transition-all duration-200 hover:underline underline-offset-2"
                        >
                            {navbarCategory.name}
                        </Link>
                    </li>
                    <li>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </li>
                    <li>
                        <Link
                            href={`/${navbarCategory.slug}/${category.slug}`}
                            className="text-gray-600 hover:text-blue-700 transition-all duration-200 hover:underline underline-offset-2"
                        >
                            {category.name}
                        </Link>
                    </li>
                    <li>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </li>
                    <li>
                        <span className="text-blue-700 font-semibold">
                            {subcategory.name || 'Loading...'}
                        </span>
                    </li>
                </ol>
            </div>
        </nav>
    );
};

// Enhanced SEO Component
const SubcategorySEO = ({ 
    subcategory, 
    navbarCategoryName, 
    categoryName,
    products 
}: { 
    subcategory: SubCategory | null;
    navbarCategoryName: { name: string; _id: string } | null;
    categoryName: { name: string; _id: string } | null;
    products: Product[];
}) => {
    const title = `${subcategory?.name || ''} Solutions - ${navbarCategoryName?.name || ''} | Digital Link Technology`;
    const description = subcategory?.description || 
        `Explore our comprehensive range of ${subcategory?.name} solutions from Digital Link Technology. Professional technology systems and cutting-edge solutions available in UAE and Saudi Arabia.`;

    const keywords = [
        `${subcategory?.name || ''} technology`,
        `${navbarCategoryName?.name || ''} solutions`,
        `${categoryName?.name || ''} systems`,
        'Digital Link Technology UAE',
        'Digital Link Technology Saudi Arabia',
        'professional technology solutions',
        'enterprise security systems',
        ...products.map(p => p.name).slice(0, 10),
    ].filter(Boolean).join(', ');

    const baseUrl = 'https://digitallinktechnology.ae';
    const pageUrl = `${baseUrl}/${navbarCategoryName?.name?.toLowerCase()}/${categoryName?.name?.toLowerCase()}/${subcategory?.name?.toLowerCase()}`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />

                {/* Open Graph */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:site_name" content="Digital Link Technology" />
                {subcategory?.image && (
                    <meta property="og:image" content={subcategory.image} />
                )}

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                {subcategory?.image && (
                    <meta name="twitter:image" content={subcategory.image} />
                )}

                {/* Additional SEO */}
                <meta name="robots" content="index, follow" />
                <meta name="geo.region" content="AE" />
                <meta name="geo.placename" content="United Arab Emirates" />
                <link rel="canonical" href={pageUrl} />
            </Head>
        </>
    );
};

// Enhanced Schema Component
const SubcategorySchema = ({ 
    subcategory, 
    products, 
    navbarCategoryName, 
    categoryName 
}: { 
    subcategory: SubCategory | null;
    products: Product[];
    navbarCategoryName: { name: string; _id: string } | null;
    categoryName: { name: string; _id: string } | null;
}) => {
    const baseUrl = 'https://digitallinktechnology.ae';
    
    const schema = {
        "@context": "https://schema.org",
        "@type": ["CollectionPage", "ItemList"],
        "@id": `${baseUrl}/${navbarCategoryName?.name?.toLowerCase()}/${categoryName?.name?.toLowerCase()}/${subcategory?.name?.toLowerCase()}`,
        "name": `${subcategory?.name} Solutions - Digital Link Technology`,
        "description": subcategory?.description || `Explore our range of ${subcategory?.name} solutions from Digital Link Technology`,
        "url": `${baseUrl}/${navbarCategoryName?.name?.toLowerCase()}/${categoryName?.name?.toLowerCase()}/${subcategory?.name?.toLowerCase()}`,
        "numberOfItems": products.length,
        "itemListElement": products.map((product, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Product",
                "@id": `${baseUrl}/${product.navbarCategory.slug}/${product.category.slug}/${product.subcategory.slug}/${product.slug}#product`,
                "name": product.name,
                "description": product.description,
                "image": product.image1,
                "url": `${baseUrl}/${product.navbarCategory.slug}/${product.category.slug}/${product.subcategory.slug}/${product.slug}`,
                "brand": {
                    "@type": "Brand",
                    "name": "Digital Link Technology"
                },
                "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "AED",
                    "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                    "url": `${baseUrl}/${product.navbarCategory.slug}/${product.category.slug}/${product.subcategory.slug}/${product.slug}`
                }
            }
        })),
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": baseUrl
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": navbarCategoryName?.name,
                    "item": `${baseUrl}/${navbarCategoryName?.name?.toLowerCase()}`
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": categoryName?.name,
                    "item": `${baseUrl}/${navbarCategoryName?.name?.toLowerCase()}/${categoryName?.name?.toLowerCase()}`
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": subcategory?.name,
                    "item": `${baseUrl}/${navbarCategoryName?.name?.toLowerCase()}/${categoryName?.name?.toLowerCase()}/${subcategory?.name?.toLowerCase()}`
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

// Professional Loading Component
const LoadingSpinner = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="flex flex-col items-center gap-6">
                <div className="relative">
                    <div className="animate-spin rounded-full h-20 w-20 border-4 border-gray-200"></div>
                    <div className="animate-spin rounded-full h-20 w-20 border-4 border-t-blue-600 border-r-transparent absolute top-0"></div>
                </div>
                <div className="text-center">
                    <p className="text-xl font-medium text-gray-700 animate-pulse">Loading Products</p>
                    <p className="text-sm text-gray-500 mt-2">Please wait while we fetch the latest information</p>
                </div>
            </div>
        </div>
    </div>
);

// Professional Error Component
const ErrorDisplay = ({ error, onRetry }: { error: string; onRetry: () => void }) => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-lg border border-red-100">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Unable to Load Products</h3>
                <p className="text-gray-600 mb-6 text-sm">{error}</p>
                <button
                    onClick={onRetry}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Try Again
                </button>
            </div>
        </div>
    </div>
);

export default function SubCategoryPage() {
    const params = useParams();
    const navbarCategory = params.navbarCategory as string;
    const categorySlug = params.categorySlug as string;
    const subcategorySlug = params.subcategorySlug as string;

    const [products, setProducts] = useState<Product[]>([]);
    const [subcategory, setSubcategory] = useState<SubCategory | null>(null);
    const [categoryName, setCategoryName] = useState<{ name: string; _id: string } | null>(null);
    const [navbarCategoryName, setNavbarCategoryName] = useState<{ name: string; _id: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setError(null);
        setLoading(true);
        
        try {
            // Fetch navbar category
            const navbarResponse = await fetch(`/api/navbar-categories/${navbarCategory}`);
            if (!navbarResponse.ok) throw new Error('Failed to fetch navbar category');
            const navbarData = await navbarResponse.json();
            setNavbarCategoryName(navbarData);

            // Fetch category details
            const categoryResponse = await fetch(`/api/categories/${categorySlug}`);
            if (!categoryResponse.ok) throw new Error('Failed to fetch category');
            const categoryData = await categoryResponse.json();
            setCategoryName(categoryData);

            // Fetch subcategory details
            const subcategoryResponse = await fetch(`/api/subcategories/${subcategorySlug}`);
            if (!subcategoryResponse.ok) throw new Error('Failed to fetch subcategory');
            const subcategoryData = await subcategoryResponse.json();
            setSubcategory(subcategoryData);

            // Fetch products
            const productsResponse = await fetch(`/api/products?subcategory=${subcategoryData._id}`, {
                cache: 'no-store'
            });
            if (!productsResponse.ok) throw new Error('Failed to fetch products');
            const productsData = await productsResponse.json();
            setProducts(productsData);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error instanceof Error ? error.message : 'An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (subcategorySlug) {
            fetchData();
        }
    }, [subcategorySlug, categorySlug, navbarCategory]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorDisplay error={error} onRetry={fetchData} />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <SubcategorySEO 
                subcategory={subcategory}
                products={products}
                navbarCategoryName={navbarCategoryName}
                categoryName={categoryName}
            />
            <SubcategorySchema 
                subcategory={subcategory}
                products={products}
                navbarCategoryName={navbarCategoryName}
                categoryName={categoryName}
            />

            <Breadcrumb
                navbarCategory={{
                    name: navbarCategoryName?.name || '',
                    slug: navbarCategory
                }}
                category={{
                    name: categoryName?.name || '',
                    slug: categorySlug
                }}
                subcategory={{
                    name: subcategory?.name || '',
                    slug: subcategorySlug
                }}
            />
            
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
                                    {subcategory?.name} Solutions
                                </h2>
                                <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Description Section */}
                    {subcategory?.description && (
                        <div className="relative">
                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900"></div>
                            
                            {/* Overlay Pattern */}
                            <div className="absolute inset-0 bg-black/10"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
                            
                            <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-16">
                                <div className="text-center">
                                    <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-light tracking-wide">
                                        {subcategory.description}
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
                                Our Premium Product Collection
                            </h3>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Explore our carefully curated selection of {subcategory?.name || 'products'}, 
                                each engineered for exceptional performance and reliability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Products Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Link
                                key={product._id}
                                href={`/${navbarCategory}/${categorySlug}/${subcategorySlug}/${product.slug}`}
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
                                            <img
                                                src={product.image1.startsWith('http') ? product.image1 : `${process.env.NEXT_PUBLIC_API_URL}${product.image1}`}
                                                alt={product.name}
                                                className="relative h-full w-full object-contain p-4 transform transition-transform duration-300 group-hover:scale-110"
                                                onError={(e) => {
                                                    console.error('Image load error:', product.image1);
                                                    e.currentTarget.src = '/placeholder.jpg';
                                                }}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="relative">
                                            <h2 className="text-xl font-semibold text-slate-800 mb-3 text-center">
                                                {product.name}
                                            </h2>
                                            
                                            <p className="text-gray-600 text-sm mb-4 text-center line-clamp-2">
                                                {product.description}
                                            </p>
                                            
                                            {/* Button */}
                                            <div className="flex items-center justify-center space-x-2 text-blue-600">
                                                <span className="relative">
                                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                                    <span className="font-medium">View Details</span>
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
                                                <div className="absolute inset-0 transform rotate-45 translate-x-4 -translate-y-4 bg-blue-600/0 group-hover:bg-red-600/10 transition-all duration-300"></div>
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