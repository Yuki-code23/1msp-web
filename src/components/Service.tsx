import React from 'react';

const Service = () => {
    return (
        <section id="service" className="py-24 bg-gray-50">
            <div className="max-w-[1000px] mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="block text-brand-green font-bold tracking-widest text-sm mb-2">SERVICE</span>
                    <h2 className="text-4xl font-bold text-gray-800 tracking-tight">Our Service</h2>
                    <div className="w-12 h-1 bg-brand-orange mx-auto mt-6"></div>
                    <p className="mt-8 text-gray-600 leading-loose">
                        地域に根ざし、人と人をつなぐITサポート。<br className="hidden md:block" />
                        あなたのビジネスを、もっと自由に、もっと快適に。
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">


                    {/* IT Installation Business */}
                    <div className="bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src="/images/service/it-install.png"
                                alt="オンサイトサポート"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white tracking-wide">オンサイトサポート</h3>
                        </div>
                        <div className="p-8">
                            <p className="text-brand-orange font-bold text-sm tracking-widest mb-4">ON-SITE SUPPORT</p>
                            <p className="text-gray-600 leading-loose">
                                PC・周辺機器のトラブル対応から、定期的なメンテナンス、新規導入時のセットアップまで、お客様の現地に訪問してIT環境をトータルサポート。<br />
                                専門的なスキルを持ったスタッフが、迅速かつ丁寧に課題を解決し、ビジネスの安定稼働を支えます。
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2 text-xs text-brand-orange font-bold">
                                <span className="px-3 py-1 bg-brand-orange/10 rounded-full">訪問トラブル対応</span>
                                <span className="px-3 py-1 bg-brand-orange/10 rounded-full">定期メンテナンス</span>
                                <span className="px-3 py-1 bg-brand-orange/10 rounded-full">機器設置・設定</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
