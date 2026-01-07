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

                <div className="mt-16 bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
                        <img
                            src="/images/service/it-install.png"
                            alt="オンサイトサポート"
                            className="w-full h-full object-cover absolute inset-0"
                        />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <span className="text-brand-orange font-bold text-sm tracking-widest mb-2 block">ON-SITE SUPPORT</span>
                        <h3 className="text-3xl font-bold text-gray-800 mb-6">オンサイトサポート</h3>
                        <p className="text-gray-600 leading-loose mb-8">
                            PC・周辺機器のトラブル対応から、定期的なメンテナンス、新規導入時のセットアップまで、お客様の現地に訪問してIT環境をトータルサポート。<br />
                            専門的なスキルを持ったスタッフが、迅速かつ丁寧に課題を解決し、ビジネスの安定稼働を支えます。
                        </p>
                        <div className="flex flex-wrap gap-3 text-xs text-brand-orange font-bold">
                            <span className="px-4 py-2 bg-brand-orange/10 rounded-full">訪問トラブル対応</span>
                            <span className="px-4 py-2 bg-brand-orange/10 rounded-full">定期メンテナンス</span>
                            <span className="px-4 py-2 bg-brand-orange/10 rounded-full">機器設置・設定</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
