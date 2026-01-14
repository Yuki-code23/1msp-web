import React from 'react';

const Philosophy = () => {
    return (
        <section id="philosophy" className="py-24 bg-gray-50">
            <div className="max-w-[1000px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-auto md:h-[500px]">
                            <img
                                src="/images/philosophy/mission.png"
                                alt="企業理念イメージ"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <span className="block text-brand-green font-bold tracking-widest text-sm mb-2">BUSINESS CONCEPT</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-8">
                            企業理念
                        </h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 text-brand-orange">Vision</h3>
                            <p className="text-sm font-bold text-gray-500 mb-2">長期的なあるべき姿</p>
                            <p className="text-gray-600 leading-relaxed font-bold">
                                人と社会のITラストワンマイルをサポートし、<br />
                                誰一人取り残さないデジタル社会を実現する
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 text-brand-orange">Mission</h3>
                            <p className="text-sm font-bold text-gray-500 mb-2">果たすべき使命</p>
                            <p className="text-gray-600 leading-relaxed font-bold mb-2">
                                現地でのIT機器訪問設定サービス通じ、<br />
                                エンドユーザー、クライアント、スタッフ、<br />
                                社会の4つの“顧客”に事前期待を超える<br />
                                感動サポートを提供する
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-brand-orange">Value</h3>
                            <p className="text-sm font-bold text-gray-500 mb-4">行動指針・価値観</p>
                            <ul className="space-y-4 text-gray-600 text-sm">
                                <li>
                                    <span className="font-bold text-gray-800 block text-base mb-1">現場主義</span>
                                    顧客の求める“最後の一歩”まで足を運び、リアルな声を最優先で聴く
                                </li>
                                <li>
                                    <span className="font-bold text-gray-800 block text-base mb-1">顧客視点ファースト</span>
                                    エンドユーザーから経営層まで、立場を問わず課題と期待を深くくみ取る
                                </li>
                                <li>
                                    <span className="font-bold text-gray-800 block text-base mb-1">迅速＆柔軟</span>
                                    スピードを重視し、状況変化に応じて最適解を臨機応変に提供する
                                </li>
                                <li>
                                    <span className="font-bold text-gray-800 block text-base mb-1">プロフェッショナリズム</span>
                                    確かな技術と丁寧な対応で、「感動サポート」を実現する
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Philosophy;
