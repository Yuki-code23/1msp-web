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

                <div className="mt-16 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="md:w-1/2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="/images/service/service-support-scene.jpg"
                            alt="オンサイトサポート"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <span className="text-brand-orange font-bold text-sm tracking-widest mb-3 block">ON-SITE SUPPORT</span>
                        <h3 className="text-3xl font-bold text-gray-800 mb-6">オンサイトサポート</h3>
                        <p className="text-gray-600 leading-loose mb-8">
                            中国5県・四国4県を中心に、IT機器の設置や設定を行うために直接お客様先へ訪問し、サポートを提供しています。ご依頼先は個人のお客様から法人企業まで幅広く対応。<br />
                            私たちが担うのは、エンドユーザーがIT機器を実際に使い始める“ラストワンマイル”の領域。<br />
                            困りごとをその場で解決し、安心して使い始めていただくための、きめ細やかなサポートを行っています。
                        </p>
                        <div className="flex flex-wrap gap-3 text-xs text-brand-orange font-bold">
                            <span className="px-4 py-2 bg-white rounded-full shadow-sm">訪問トラブル対応</span>
                            <span className="px-4 py-2 bg-white rounded-full shadow-sm">定期メンテナンス</span>
                            <span className="px-4 py-2 bg-white rounded-full shadow-sm">機器設置・設定</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
