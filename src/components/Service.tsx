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
                    {/* BPO Business */}
                    <div className="bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src="/images/service/bpo.png"
                                alt="BPO事業"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white tracking-wide">BPO事業</h3>
                        </div>
                        <div className="p-8">
                            <p className="text-brand-green font-bold text-sm tracking-widest mb-4">BUSINESS PROCESS OUTSOURCING</p>
                            <p className="text-gray-600 leading-loose">
                                コールセンター運営やバックオフィス業務など、企業の業務プロセスをアウトソーシングで支援。<br />
                                効率的な運用体制の構築から実務まで、高品質なサービスを提供し、クライアント様のコア業務への集中をサポートします。
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2 text-xs text-brand-green font-bold">
                                <span className="px-3 py-1 bg-brand-green/10 rounded-full">コールセンター運営</span>
                                <span className="px-3 py-1 bg-brand-green/10 rounded-full">事務代行</span>
                                <span className="px-3 py-1 bg-brand-green/10 rounded-full">データ入力</span>
                            </div>
                        </div>
                    </div>

                    {/* IT Installation Business */}
                    <div className="bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src="/images/service/it-install.png"
                                alt="ITキッティング・設置事業"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white tracking-wide">ITキッティング・設置事業</h3>
                        </div>
                        <div className="p-8">
                            <p className="text-brand-orange font-bold text-sm tracking-widest mb-4">IT INSTALLATION & SETUP</p>
                            <p className="text-gray-600 leading-loose">
                                PC・サーバー・ネットワーク機器のキッティングから現地設置設定までをワンストップで対応。<br />
                                全国規模の多拠点展開や、大規模なリプレイス案件など、確かな技術力でITインフラの整備を支援します。
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2 text-xs text-brand-orange font-bold">
                                <span className="px-3 py-1 bg-brand-orange/10 rounded-full">PCキッティング</span>
                                <span className="px-3 py-1 bg-brand-orange/10 rounded-full">現地設定</span>
                                <span className="px-3 py-1 bg-brand-orange/10 rounded-full">ネットワーク構築</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
