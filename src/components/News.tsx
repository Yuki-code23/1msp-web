import React from 'react';
import { newsData } from '@/data/news';

const News = () => {
    return (
        <section id="news" className="py-24 bg-white">
            <div className="max-w-[1000px] mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="block text-brand-green font-bold tracking-widest text-sm mb-2">NEWS</span>
                    <h2 className="text-4xl font-bold text-gray-800 tracking-tight">News</h2>
                    <div className="w-12 h-1 bg-brand-orange mx-auto mt-6"></div>
                </div>

                <div className="w-full">
                    <ul className="border-t border-gray-200">
                        {newsData.map((news) => (
                            <li key={news.id} className="group border-b border-gray-200">
                                <a href="#" className="block py-8 px-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-10 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-6 min-w-[240px]">
                                        <span className="text-gray-500 font-mono text-sm tracking-wider">{news.date}</span>
                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded">{news.category}</span>
                                    </div>
                                    <p className="text-gray-800 font-medium flex-1 group-hover:text-brand-green transition-colors">{news.title}</p>
                                    <div className="text-gray-300 group-hover:text-brand-orange transition-colors">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-12 text-center">
                        <a href="#" className="inline-block px-12 py-3 border border-gray-300 text-gray-600 rounded-full font-bold hover:bg-brand-green hover:text-white hover:border-brand-green transition-all">
                            一覧を見る
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
