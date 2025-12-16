import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { newsData } from '@/data/news';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Static params generation for export
export async function generateStaticParams() {
    return newsData.map((news) => ({
        id: news.id,
    }));
}

export default async function NewsDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const news = newsData.find((item) => item.id === id);

    if (!news) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-800">
            <Header />

            <main className="flex-grow pt-24 pb-20">
                <article className="max-w-[800px] mx-auto px-6 md:px-12">
                    {/* Header */}
                    <div className="mb-12 border-b border-gray-200 pb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs font-bold">
                                {news.category}
                            </span>
                            <time className="text-gray-500 font-mono text-sm tracking-wider">
                                {news.date}
                            </time>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold leading-relaxed text-gray-800">
                            {news.title}
                        </h1>
                    </div>

                    {/* Content */}
                    <div
                        className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-16 [&>p]:mb-6"
                        dangerouslySetInnerHTML={{ __html: news.content }}
                    />

                    {/* Footer / Back button */}
                    <div className="text-center pt-8 border-t border-gray-200">
                        <Link
                            href="/#news"
                            className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 text-gray-600 rounded-full font-bold hover:bg-brand-green hover:text-white hover:border-brand-green transition-all"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            一覧に戻る
                        </Link>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
