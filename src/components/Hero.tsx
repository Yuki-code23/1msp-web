import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg-jp-v2.png"
                    alt="Japanese IT Professional"
                    className="w-full h-full object-cover"
                />
                {/* Overlay for text readability - White fade */}
                <div className="absolute inset-0 bg-white/80 md:bg-white/60"></div>
            </div>

            <div className="relative z-10 max-w-[1240px] w-full mx-auto px-6 md:px-12">
                <div className="max-w-2xl space-y-8">
                    <div className="inline-block px-4 py-1 border border-brand-green text-brand-green rounded-full text-sm font-bold tracking-wider bg-white/90 backdrop-blur-sm shadow-sm">
                        広島エリア No.1 のITサポート
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-[1.3] tracking-tight">
                        <span className="inline-block">人に寄り添う</span><span className="inline-block">スキルを、</span><br />
                        <span className="inline-block"><span className="text-brand-green">未来</span>の<span className="text-brand-orange">力</span>に</span><span className="inline-block">変える仕事。</span>
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                        1MSPは、IT機器の訪問サポートを通じて、<br />
                        人々の暮らしとビジネスをより便利で快適なものにします。
                    </p>
                    <div className="pt-4">
                        <Link href="#contact" className="inline-flex items-center justify-center px-10 py-4 bg-brand-orange text-white text-lg font-bold rounded-full shadow-lg hover:bg-orange-500 hover:shadow-xl transition-all transform hover:-translate-y-1">
                            無料相談はこちら
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
