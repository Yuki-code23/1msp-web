import React from 'react';

const Company = () => {
    return (
        <section id="company" className="py-24 bg-gray-50">
            <div className="max-w-[1000px] mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="block text-brand-green font-bold tracking-widest text-sm mb-2">COMPANY</span>
                    <h2 className="text-4xl font-bold text-gray-800 tracking-tight">Company</h2>
                    <div className="w-12 h-1 bg-brand-orange mx-auto mt-6"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <table className="w-full text-left border-collapse">
                            <tbody>
                                <tr className="border-b border-gray-100">
                                    <th className="py-5 font-bold text-gray-800 w-1/3 text-sm">名称</th>
                                    <td className="py-5 text-gray-600 text-sm">ワンマイルサポート株式会社</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <th className="py-5 font-bold text-gray-800 text-sm">代表者</th>
                                    <td className="py-5 text-gray-600 text-sm">代表取締役社長　東川 直樹</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <th className="py-5 font-bold text-gray-800 text-sm">設立</th>
                                    <td className="py-5 text-gray-600 text-sm">2025年9月17日</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <th className="py-5 font-bold text-gray-800 text-sm align-top">住所</th>
                                    <td className="py-5 text-gray-600 leading-relaxed text-sm">
                                        〒730-0845<br />
                                        広島県広島市中区舟入川口町13-35戸倉ビル
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <th className="py-5 font-bold text-gray-800 text-sm">資本金</th>
                                    <td className="py-5 text-gray-600 text-sm">100万円</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <th className="py-5 font-bold text-gray-800 align-top text-sm">事業内容</th>
                                    <td className="py-5 text-gray-600 leading-relaxed text-sm">IT機器訪問設定サポート</td>
                                </tr>
                                <tr>
                                    <th className="py-5 font-bold text-gray-800 text-sm">取引銀行</th>
                                    <td className="py-5 text-gray-600 text-sm">山陰合同銀行</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="h-[400px] bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center relative shadow-inner">
                        {/* Google Maps Placeholder */}
                        <div className="absolute inset-0 bg-gray-300"></div>
                        <div className="relative z-10 text-center">
                            <p className="text-gray-500 font-bold bg-white/90 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm">
                                Google Maps Area
                            </p>
                            <p className="text-xs text-gray-500 mt-2">API Key Required</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Company;
