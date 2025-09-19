'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import {
    FaArrowLeft,
    FaExpand,
    FaTimes,
    FaChevronLeft,
    FaChevronRight,
    FaWhatsapp,
    FaFacebookF,
    FaTwitter,
    FaLink
} from 'react-icons/fa';

interface Product {
    _id: string;
    name: string;
    description: string;
    keyFeatures?: string[];
    image1: string;
    image2: string;
    image3: string;
    image4?: string;
    navbarCategory: string;
    category: string;
    subcategory: string;
    slug: string;
    seoTitle?: string;
    seoDescription?: string;
    seoKeywords?: string;
    faqSchema?: {
        question: string;
        answer: string;
    }[];
}

interface NavbarCategoryDetails {
    _id: string;
    name: string;
    slug: string;
}

interface CategoryDetails {
    _id: string;
    name: string;
    slug: string;
}

interface SubCategoryDetails {
    _id: string;
    name: string;
    slug: string;
}

interface BreadcrumbProps {
    navbarCategory: {
        name: string;
        slug: string;
    } | null;
    category: {
        name: string;
        slug: string;
    } | null;
    subcategory: {
        name: string;
        slug: string;
    } | null;
}

interface SchemaData {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    image: string[];
    brand: {
        "@type": string;
        name: string;
    };
    offers: {
        "@type": string;
        availability: string;
        price: string;
        priceCurrency: string;
        priceValidUntil: string;
        url: string;
        seller?: {
            "@type": string;
            name: string;
            address?: {
                "@type": string;
                addressCountry: string;
                addressRegion: string;
            };
        };
        areaServed?: {
            "@type": string;
            name: string;
        };
    };
    category?: string;
    additionalProperty?: {
        "@type": string;
        name: string;
        value: string;
    }[];
    aggregateRating?: {
        "@type": string;
        ratingValue: string;
        reviewCount: string;
    };
    review?: {
        "@type": string;
        reviewRating: {
            "@type": string;
            ratingValue: string;
            bestRating: string;
        };
        author: {
            "@type": string;
            name: string;
        };
        publisher?: {
            "@type": string;
            name: string;
        };
    };
}

const Breadcrumb = ({ navbarCategory, category, subcategory, productName }: BreadcrumbProps & { productName?: string }) => {
    return (
        <nav className="bg-white border-b">
            <div className="container mx-auto px-6 py-3">
                <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-500 overflow-x-auto">
                    <li>
                        <Link href="/" className="hover:text-gray-700">Home</Link>
                    </li>
                    <span className="hidden sm:inline">/</span>
                    {navbarCategory && (
                        <>
                            <li>
                                <Link
                                    href={`/${navbarCategory.slug}`}
                                    className="hover:text-gray-700"
                                >
                                    {navbarCategory.name}
                                </Link>
                            </li>
                            <span className="hidden sm:inline">/</span>
                        </>
                    )}
                    {category && (
                        <>
                            <li>
                                <Link
                                    href={`/${navbarCategory?.slug}/${category.slug}`}
                                    className="hover:text-gray-700"
                                >
                                    {category.name}
                                </Link>
                            </li>
                            <span className="hidden sm:inline">/</span>
                        </>
                    )}
                    {subcategory && (
                        <>
                            <li>
                                <Link
                                    href={`/${navbarCategory?.slug}/${category?.slug}/${subcategory.slug}`}
                                    className="hover:text-gray-700"
                                >
                                    {subcategory.name}
                                </Link>
                            </li>
                            <span className="hidden sm:inline">/</span>
                        </>
                    )}
                    {productName && (
                        <li className="text-gray-900 truncate max-w-[12rem] sm:max-w-none">{productName}</li>
                    )}
                </ol>
            </div>
        </nav>
    );
};

const ProductSEO = ({ product, navbarCategory, category, subcategory }: {
    product: Product;
    navbarCategory: NavbarCategoryDetails | null;
    category: CategoryDetails | null;
    subcategory: SubCategoryDetails | null;
}) => {
    const images = [product.image1, product.image2, product.image3, product.image4].filter(Boolean) as string[];

    // Format product name for SEO
    const formatProductName = (name: string) => {
        return name
            .replace(/[^a-zA-Z0-9\s-]/g, '') // Remove special characters
            .replace(/\s+/g, ' ') // Replace multiple spaces with single space
            .trim();
    };

    const seoProductName = formatProductName(product.name);

    // Enhanced title with Saudi Arabia location and brand
    const title = product.seoTitle || `${seoProductName} in Saudi Arabia | Digital Link Technology Official Provider`;

    // Enhanced description with Saudi Arabia context
    const enhancedDescription = product.seoDescription || [
        `Buy ${seoProductName} in Saudi Arabia from Digital Link Technology's official provider.`,
        product.description,
        `Available in ${category?.name || ''} category`,
        `Type: ${subcategory?.name || ''}`,
        product.keyFeatures?.length ? `Features: ${product.keyFeatures.join(', ')}` : '',
        'Free delivery across Saudi Arabia. Contact us for best prices.'
    ].filter(Boolean).join('. ');

    const truncatedDescription = `${enhancedDescription.substring(0, 155)}...`;

    // Enhanced keywords with Saudi Arabia context
    const keywords = [
        seoProductName,
        `${seoProductName} Saudi Arabia`,
        `${seoProductName} Riyadh`,
        `${seoProductName} price`,
        `${seoProductName} price Saudi Arabia`,
        `buy ${seoProductName} Saudi Arabia`,
        `Digital Link Technology ${seoProductName}`,
        `${seoProductName} distributor Saudi Arabia`,
        `${seoProductName} supplier Saudi Arabia`,
        `${category?.name} Saudi Arabia`,
        `${subcategory?.name} Saudi Arabia`,
        category?.name || '',
        subcategory?.name || ''
    ].filter(Boolean);

    const enhancedKeywords = keywords.join(', ');

    // Enhanced FAQ Schema with more product-specific questions
    const faqSchema = product.faqSchema ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            ...product.faqSchema.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            })),
            {
                "@type": "Question",
                "name": `Where can I buy ${seoProductName} in Saudi Arabia?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `You can buy ${seoProductName} from Digital Link Technology Saudi Arabia, the official distributor. We offer free delivery across Saudi Arabia and competitive prices. Contact us for more information.`
                }
            },
            {
                "@type": "Question",
                "name": `What is the price of ${seoProductName} in Saudi Arabia?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `For the best price on ${seoProductName} in Saudi Arabia, please contact us directly. We offer competitive pricing and special deals for bulk orders.`
                }
            },
            {
                "@type": "Question",
                "name": `What are the key features of ${seoProductName}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${seoProductName} comes with advanced features including ${product.keyFeatures?.join(', ')}. Contact us for detailed specifications.`
                }
            },
            {
                "@type": "Question",
                "name": `Is ${seoProductName} available in Riyadh?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Yes, ${seoProductName} is available in Riyadh and across Saudi Arabia. We offer free delivery and professional installation services.`
                }
            }
        ]
    } : null;

    // Enhanced Product Schema with more details
    const productSchema: SchemaData = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: seoProductName,
        description: enhancedDescription,
        image: images,
        brand: {
            "@type": "Brand",
            name: "Digital Link Technology"
        },
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            price: "0",
            priceCurrency: "SAR",
            priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
            url: `https://digitallink-sa.com/${navbarCategory?.slug}/${category?.slug}/${subcategory?.slug}/${product.slug}`,
            seller: {
                "@type": "Organization",
                name: "Digital Link Technology",
                address: {
                    "@type": "PostalAddress",
                    addressCountry: "SA",
                    addressRegion: "Riyadh"
                }
            },
            areaServed: {
                "@type": "Country",
                name: "Saudi Arabia"
            }
        },
        category: `${navbarCategory?.name || ''} > ${category?.name || ''} > ${subcategory?.name || ''}`,
        additionalProperty: [
            ...(product.keyFeatures?.map(feature => ({
                "@type": "PropertyValue",
                "name": "Feature",
                "value": feature
            })) || []),
            {
                "@type": "PropertyValue",
                "name": "Location",
                "value": "Saudi Arabia"
            },
            {
                "@type": "PropertyValue",
                "name": "Availability",
                "value": "In Stock"
            },
            {
                "@type": "PropertyValue",
                "name": "Brand",
                "value": "Digital Link Technology"
            },
            {
                "@type": "PropertyValue",
                "name": "Model",
                "value": seoProductName
            }
        ],
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "50",
        },
        review: {
            "@type": "Review",
            reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5"
            },
            author: {
                "@type": "Organization",
                name: "Digital Link Technology Saudi Arabia"
            },
            publisher: {
                "@type": "Organization",
                name: "Digital Link Technology Saudi Arabia"
            }
        }
    };

    // Additional Product Schema for better SEO
    const additionalProductSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": seoProductName,
        "model": seoProductName,
        "brand": {
            "@type": "Brand",
            "name": "Digital Link Technology"
        },
        "manufacturer": {
            "@type": "Organization",
            "name": "Digital Link Technology"
        },
        "category": `${navbarCategory?.name || ''} > ${category?.name || ''} > ${subcategory?.name || ''}`,
        "description": enhancedDescription,
        "image": images,
        "sku": product._id,
        "mpn": product._id,
        "identifier": {
            "@type": "PropertyValue",
            "name": "Product ID",
            "value": product._id
        },
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "SAR",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "Digital Link Technology Saudi Arabia"
            }
        }
    };

    // Enhanced Local Business Schema
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Digital Link Technology",
        image: "https://digitallink-sa.com/logo.png",
        "@id": "https://digitallink-sa.com",
        url: "https://digitallink-sa.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Olaya Street",
            addressLocality: "Riyadh",
            addressRegion: "Riyadh",
            postalCode: "",
            addressCountry: "SA"
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 24.7136,
            longitude: 46.6753
        },
        priceRange: "$$",
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            opens: "09:00",
            closes: "18:00"
        },
        "sameAs": [
            "https://www.facebook.com/digitallinktechsa",
            "https://www.linkedin.com/company/digitallinktechsa",
            "https://twitter.com/digitallinktechsa",
            "https://www.instagram.com/digitallinktechsa"
        ]
    };

    // Enhanced WebPage Schema
    const additionalStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${seoProductName} - Digital Link Technology Saudi Arabia`,
        "description": enhancedDescription,
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://digitallink-sa.com"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": navbarCategory?.name || "",
                    "item": `https://digitallink-sa.com/${navbarCategory?.slug}`
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": category?.name || "",
                    "item": `https://digitallink-sa.com/${navbarCategory?.slug}/${category?.slug}`
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": subcategory?.name || "",
                    "item": `https://digitallink-sa.com/${navbarCategory?.slug}/${category?.slug}/${subcategory?.slug}`
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "name": seoProductName,
                    "item": `https://digitallink-sa.com/${navbarCategory?.slug}/${category?.slug}/${subcategory?.slug}/${product.slug}`
                }
            ]
        },
        "mainEntity": {
            "@type": "Product",
            "name": seoProductName,
            "description": enhancedDescription,
            "image": images,
            "brand": {
                "@type": "Brand",
                "name": "Digital Link Technology"
            }
        }
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={truncatedDescription} />
                <meta name="keywords" content={enhancedKeywords} />

                {/* Enhanced Meta Tags */}
                <meta name="geo.region" content="SA" />
                <meta name="geo.placename" content="Riyadh" />
                <meta name="geo.position" content="24.7136;46.6753" />
                <meta name="ICBM" content="24.7136, 46.6753" />

                {/* Open Graph Tags */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={truncatedDescription} />
                <meta property="og:image" content={product.image1} />
                <meta property="og:type" content="product" />
                <meta property="og:site_name" content="Digital Link Technology Saudi Arabia" />
                <meta property="og:locale" content="en_SA" />
                <meta property="product:price:amount" content="0" />
                <meta property="product:price:currency" content="SAR" />
                <meta property="product:availability" content="in stock" />
                <meta property="product:condition" content="new" />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={truncatedDescription} />
                <meta name="twitter:image" content={product.image1} />

                {/* Product Specific Meta Tags */}
                {product.keyFeatures?.map((feature, index) => (
                    <meta key={index} property="product:feature" content={feature} />
                ))}

                {/* Additional Product Name Meta Tags */}
                <meta name="product:name" content={seoProductName} />
                <meta name="product:brand" content="Digital Link Technology" />
                <meta name="product:category" content={`${navbarCategory?.name} > ${category?.name} > ${subcategory?.name}`} />
                <meta name="product:model" content={seoProductName} />
                <meta name="product:sku" content={product._id} />

                {/* Enhanced Product Name Meta Tags */}
                <meta name="product:name:en" content={seoProductName} />
                <meta name="product:name:ar" content={seoProductName} />
                <meta name="product:model:name" content={seoProductName} />
                <meta name="product:model:number" content={product._id} />
                <meta name="product:model:type" content={subcategory?.name || ''} />

                {/* Additional SEO Meta Tags */}
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Digital Link Technology Saudi Arabia" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />
                <meta name="generator" content="Next.js" />

                {/* Canonical and Alternate URLs */}
                <link rel="canonical" href={`https://digitallink-sa.com/${navbarCategory?.slug}/${category?.slug}/${subcategory?.slug}/${product.slug}`} />
                <link rel="alternate" href={`https://digitallink-sa.com/${navbarCategory?.slug}/${category?.slug}/${subcategory?.slug}/${product.slug}`} hrefLang="en-sa" />
                <link rel="alternate" href={`https://digitallink-sa.com/ar/${navbarCategory?.slug}/${category?.slug}/${subcategory?.slug}/${product.slug}`} hrefLang="ar-sa" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(additionalStructuredData) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(additionalProductSchema) }}
                />
                {faqSchema && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                    />
                )}
            </Head>
        </>
    );
};

export default function ProductDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const productSlug = params.productSlug as string;

    const [product, setProduct] = useState<Product | null>(null);
    const [navbarCategory, setNavbarCategory] = useState<NavbarCategoryDetails | null>(null);
    const [category, setCategory] = useState<CategoryDetails | null>(null);
    const [subcategory, setSubcategory] = useState<SubCategoryDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isImageExpanded, setIsImageExpanded] = useState(false);
    
    const [copied, setCopied] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMainImageLoaded, setIsMainImageLoaded] = useState(false);

    useEffect(() => {
        const fetchProductAndDetails = async () => {
            try {
                // Fetch product details
                const productResponse = await fetch(`/api/products/slug/${productSlug}`);
                if (!productResponse.ok) {
                    throw new Error('Failed to fetch product');
                }
                const productData = await productResponse.json();
                setProduct(productData);
                setSelectedImageIndex(0);

                // Fetch navbar category details using the slug from URL params
                const navbarResponse = await fetch(`/api/navbar-categories/${params.navbarCategory}`);
                if (!navbarResponse.ok) {
                    throw new Error('Failed to fetch navbar category');
                }
                const navbarData = await navbarResponse.json();
                setNavbarCategory({
                    _id: navbarData._id,
                    name: navbarData.name,
                    slug: navbarData.slug
                });

                // Fetch category details using the slug from URL params
                const categoryResponse = await fetch(`/api/categories/${params.categorySlug}`);
                if (!categoryResponse.ok) {
                    throw new Error('Failed to fetch category');
                }
                const categoryData = await categoryResponse.json();
                setCategory({
                    _id: categoryData._id,
                    name: categoryData.name,
                    slug: categoryData.slug
                });

                // Fetch subcategory details using the slug from URL params
                const subcategoryResponse = await fetch(`/api/subcategories/${params.subcategorySlug}`);
                if (!subcategoryResponse.ok) {
                    throw new Error('Failed to fetch subcategory');
                }
                const subcategoryData = await subcategoryResponse.json();
                setSubcategory({
                    _id: subcategoryData._id,
                    name: subcategoryData.name,
                    slug: subcategoryData.slug
                });

            } catch (error) {
                console.error('Error fetching details:', error);
                setError(error instanceof Error ? error.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        if (productSlug && params.navbarCategory && params.categorySlug && params.subcategorySlug) {
            fetchProductAndDetails();
        }
    }, [productSlug, params.navbarCategory, params.categorySlug, params.subcategorySlug]);

    const allImages = product ? [product.image1, product.image2, product.image3, product.image4].filter(Boolean) as string[] : [];

    const prevImage = () => {
        setSelectedImageIndex(i => (i - 1 + allImages.length) % allImages.length);
    };

    const nextImage = () => {
        setSelectedImageIndex(i => (i + 1) % allImages.length);
    };

    // Reset image loading state whenever the selected image changes
    useEffect(() => {
        setIsMainImageLoaded(false);
    }, [selectedImageIndex, product?.slug]);

    const handleNativeShare = async () => {
        if (!product) return;
        try {
            if (navigator.share) {
                await navigator.share({
                    title: product.name,
                    text: product.description,
                    url: window.location.href
                });
            } else {
                await navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        } catch {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const shareLinks = {
        whatsapp: `https://wa.me/?text=${encodeURIComponent(product?.name || "")}%20${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(product?.name || "")}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 relative">
                <div className="container mx-auto px-6 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="aspect-square bg-white rounded-2xl p-2 shadow-sm relative">
                                <div className="h-full w-full rounded-xl bg-gray-100 animate-pulse"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                                </div>
                            </div>
                            <div className="mt-4 flex gap-3">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-20 h-20 rounded-lg bg-gray-100 animate-pulse"></div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="h-6 w-40 bg-gray-100 rounded animate-pulse"></div>
                            <div className="h-10 w-3/4 bg-gray-100 rounded animate-pulse"></div>
                            <div className="h-24 w-full bg-gray-100 rounded animate-pulse"></div>
                            <div className="h-48 w-full bg-gray-100 rounded animate-pulse"></div>
                        </div>
                    </div>
                </div>
                {/* Full-page spinner overlay */}
                <div className="fixed inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                            <div className="h-20 w-20 rounded-full border-4 border-gray-200"></div>
                            <div className="absolute inset-0 h-20 w-20 rounded-full border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                        </div>
                        <div className="text-center">
                            <p className="text-xl font-semibold text-gray-700">Loading Product</p>
                            <p className="text-sm text-gray-500 mt-1">Please wait while we fetch the latest information</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 tracking-tight">Product not found</h1>
                    <p className="text-gray-600 mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
                    <Link href="/products" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                        <FaArrowLeft />
                        Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    const breadcrumbProps: BreadcrumbProps = {
        navbarCategory: navbarCategory && {
            name: navbarCategory.name,
            slug: navbarCategory.slug
        },
        category: category && {
            name: category.name,
            slug: category.slug
        },
        subcategory: subcategory && {
            name: subcategory.name,
            slug: subcategory.slug
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {product && (
                <ProductSEO
                    product={product}
                    navbarCategory={navbarCategory}
                    category={category}
                    subcategory={subcategory}
                />
            )}

            <Breadcrumb {...breadcrumbProps} productName={product.name} />

            {/* Back Button */}
            <div className="container mx-auto px-6 py-6">
                <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <FaArrowLeft />
                    <span>Back</span>
                </button>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Gallery with enhanced hover effects */}
                    <div className="space-y-4">
                        <motion.div
                            className="relative aspect-[4/3] w-full max-w-[500px] mx-auto bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group cursor-pointer"
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {/* Image loading skeleton */}
                            {!isMainImageLoaded && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                                    <div className="w-24 h-24 rounded-xl bg-gray-200 animate-pulse"></div>
                                </div>
                            )}
                            <img
                                src={allImages[selectedImageIndex] || "/placeholder-product.jpg"}
                                alt={product.name}
                                className={`w-full h-full object-contain p-5 transition-transform duration-300 ${isMainImageLoaded ? '' : 'opacity-0'}`}
                                onLoad={() => setIsMainImageLoaded(true)}
                                onError={() => setIsMainImageLoaded(true)}
                            />

                            {/* Navigation arrows - enhanced visibility on hover */}
                            {allImages.length > 1 && (
                                <>
                                    <motion.button
                                        aria-label="Previous image"
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/95 text-gray-700 border border-gray-200 shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{
                                            opacity: isHovered ? 1 : 0,
                                            x: isHovered ? 0 : -10
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaChevronLeft size={16} />
                                    </motion.button>
                                    <motion.button
                                        aria-label="Next image"
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/95 text-gray-700 border border-gray-200 shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{
                                            opacity: isHovered ? 1 : 0,
                                            x: isHovered ? 0 : 10
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaChevronRight size={16} />
                                    </motion.button>
                                </>
                            )}

                            {/* Expand button */}
                            <motion.button
                                onClick={() => setIsImageExpanded(true)}
                                className="absolute top-4 right-4 bg-white/95 text-gray-700 border border-gray-200 px-3 py-2.5 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
                                aria-label="Expand image"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: isHovered ? 1 : 0.7,
                                    scale: isHovered ? 1 : 0.9
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaExpand size={14} />
                            </motion.button>

                            {/* Image indicator */}
                            {allImages.length > 1 && (
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {allImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedImageIndex(idx)}
                                            className={`w-2 h-2 rounded-full transition-all duration-200 ${selectedImageIndex === idx ? "bg-blue-600 w-6" : "bg-white/70 hover:bg-white"
                                                }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </motion.div>

                        {/* Thumbnail gallery with enhanced active states */}
                        {allImages.length > 1 && (
                            <div className="flex gap-3 overflow-x-auto pb-2 justify-center">
                                {allImages.map((img, idx) => (
                                    <motion.button
                                        key={idx}
                                        onClick={() => setSelectedImageIndex(idx)}
                                        className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${selectedImageIndex === idx
                                                ? "border-blue-600 shadow-lg ring-2 ring-blue-100"
                                                : "border-gray-200 hover:border-gray-400 hover:shadow-md"
                                            }`}
                                        aria-label={`View image ${idx + 1}`}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <img
                                            src={img}
                                            alt={`${product.name} ${idx + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                        {selectedImageIndex === idx && (
                                            <motion.div
                                                className="absolute inset-0 bg-blue-600/10"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.2 }}
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        )}

                        {/* Share buttons (moved below images) */}
                        <div className="flex items-center gap-3 justify-center">
                            <motion.a
                                href={shareLinks.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Share on WhatsApp"
                                className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-green-50 text-green-600 border border-green-200 hover:bg-green-100 transition-all duration-200"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaWhatsapp size={18} />
                            </motion.a>
                            <motion.a
                                href={shareLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Share on X"
                                className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-blue-50 text-sky-600 border border-sky-200 hover:bg-blue-100 transition-all duration-200"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaTwitter size={18} />
                            </motion.a>
                            <motion.a
                                href={shareLinks.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Share on Facebook"
                                className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-all duration-200"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaFacebookF size={18} />
                            </motion.a>
                            <motion.button
                                onClick={handleNativeShare}
                                aria-label="Copy link"
                                className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 transition-all duration-200 relative"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaLink size={16} />
                                {copied && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg"
                                    >
                                        Copied!
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                                    </motion.div>
                                )}
                            </motion.button>
                        </div>
                    </div>

                    {/* Right: Title + quick actions + concise bullets */}
                    <div className="space-y-6">
                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">{product.name}</h1>
                            <div className="h-1.5 w-16 bg-blue-600 rounded mt-2"></div>
                            <p className="text-base md:text-lg text-gray-600 mt-2">{product.description}</p>
                        </motion.div>

                        {/* Key Features (moved directly below description) */}
                        {product.keyFeatures && product.keyFeatures.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5 }}
                                className="rounded-xl p-6 shadow-sm"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                                <ul className="space-y-3">
                                    {product.keyFeatures.map((feature, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start gap-3"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: i * 0.1 }}
                                        >
                                            <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                                            <span className="text-gray-800">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {/* Category information */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                            className="rounded-xl p-6 shadow-sm"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Information</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-800">
                                        <span className="font-medium">Navbar Category:</span>
                                        <Link
                                            href={`/${navbarCategory?.slug}`}
                                            className="ml-2 text-indigo-600 hover:text-indigo-700 transition-colors"
                                        >
                                            {navbarCategory?.name || 'Loading...'}
                                        </Link>
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-800">
                                        <span className="font-medium">Category:</span>
                                        <Link
                                            href={`/${navbarCategory?.slug}/${category?.slug}`}
                                            className="ml-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                                        >
                                            {category?.name || 'Loading...'}
                                        </Link>
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                                    <span className="text-gray-800">
                                        <span className="font-medium">Sub Category:</span>
                                        <Link
                                            href={`/${navbarCategory?.slug}/${category?.slug}/${subcategory?.slug}`}
                                            className="ml-2 text-amber-600 hover:text-amber-700 transition-colors"
                                        >
                                            {subcategory?.name || 'Loading...'}
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </motion.div>



                        {/* Contact Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center md:justify-start"
                        >
                            <Link
                                href="/Contact"
                                className="group relative inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                <svg
                                    className="w-4 h-4 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                Contact Us
                            </Link>
                        </motion.div>


                    </div>
                </div>
            </div>

            {/* Enhanced Image modal */}
            {isImageExpanded && (
                <motion.div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setIsImageExpanded(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="relative max-w-6xl max-h-full"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={allImages[selectedImageIndex] || "/placeholder-product.jpg"}
                            alt={product.name}
                            className="object-contain max-h-full rounded-xl shadow-2xl"
                        />
                        <motion.button
                            onClick={() => setIsImageExpanded(false)}
                            className="absolute top-4 right-4 text-white bg-black/20 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-black/40 transition-all duration-200"
                            aria-label="Close"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaTimes size={18} />
                        </motion.button>

                        {/* Modal navigation */}
                        {allImages.length > 1 && (
                            <>
                                <motion.button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/20 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-black/40 transition-all duration-200"
                                    aria-label="Previous image"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaChevronLeft size={18} />
                                </motion.button>
                                <motion.button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/20 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-black/40 transition-all duration-200"
                                    aria-label="Next image"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaChevronRight size={18} />
                                </motion.button>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}