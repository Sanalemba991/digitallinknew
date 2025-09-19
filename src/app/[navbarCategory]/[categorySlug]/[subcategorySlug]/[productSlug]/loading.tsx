'use client';

export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-6 py-6">
                <div className="h-4 w-40 bg-gray-100 rounded animate-pulse mb-6" />
            </div>
            <div className="container mx-auto px-6 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <div className="relative aspect-[4/3] w-full max-w-[500px] mx-auto bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                            <div className="absolute inset-0 bg-gray-100 animate-pulse" />
                        </div>
                        <div className="mt-4 flex gap-3 justify-center">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-16 h-16 rounded-xl bg-gray-100 animate-pulse" />
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="h-8 w-3/4 bg-gray-100 rounded animate-pulse" />
                        <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
                        <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
                        <div className="rounded-xl p-6 shadow-sm border border-gray-100">
                            <div className="h-5 w-48 bg-gray-100 rounded animate-pulse mb-4" />
                            <div className="space-y-3">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="h-4 w-2/3 bg-gray-100 rounded animate-pulse" />
                                ))}
                            </div>
                        </div>
                        <div className="h-10 w-40 bg-gray-100 rounded animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
}


