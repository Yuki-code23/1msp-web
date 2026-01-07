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

                {/* Basic Info Table */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto mb-20">
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

                {/* Office Locations */}
                <div className="space-y-20">
                    {/* Headquarters */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-brand-green rounded-full"></span>
                            本社
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-[350px] flex flex-col justify-center">
                                <p className="text-gray-600 leading-loose">
                                    〒730-0845<br />
                                    広島県広島市中区舟入川口町13-35<br />
                                    戸倉ビル
                                </p>
                            </div>
                            <div className="h-[350px] bg-gray-200 rounded-2xl overflow-hidden shadow-inner">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411.599225863498!2d132.440508765776!3d34.38116420350743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355aa25af5557877%3A0xf6384b883668d5c4!2z44CSNzMwLTA4NDUg5bqD5bO255yM5bqD5bO25biC5Lit5Yy66Iif5YWl5bed5Y-j55S677yR77yT4oiS77yT77yVIOaIuOWAieODk-ODqw!5e0!3m2!1sja!2sjp!4v1765878864369!5m2!1sja!2sjp"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                    title="Headquarters Map"
                                    className="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Okayama Office */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-brand-orange rounded-full"></span>
                            岡山営業所
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-[350px] flex flex-col justify-center">
                                <p className="text-gray-600 leading-loose">
                                    〒700-0821<br />
                                    岡山県岡山市北区中山下1丁目11番15号<br />
                                    新田第1ビル402
                                </p>
                            </div>
                            <div className="h-[350px] bg-gray-200 rounded-2xl overflow-hidden shadow-inner">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://maps.google.com/maps?q=%E5%B2%A1%E5%B1%B1%E7%9C%8C%E5%B2%A1%E5%B1%B1%E5%B8%82%E5%8C%97%E5%8C%BA%E4%B8%AD%E5%B1%B1%E4%B8%8B1%E4%B8%81%E7%9B%AE11%E7%95%AA15%E5%8F%B7&output=embed"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                    title="Okayama Office Map"
                                    className="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Takamatsu Office */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-brand-orange rounded-full"></span>
                            高松営業所
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-[350px] flex flex-col justify-center">
                                <p className="text-gray-600 leading-loose">
                                    〒760-0018<br />
                                    香川県高松市天神前10番5号<br />
                                    高松セントラルスカイビルディング 3F south
                                </p>
                            </div>
                            <div className="h-[350px] bg-gray-200 rounded-2xl overflow-hidden shadow-inner">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://maps.google.com/maps?q=%E9%A6%99%E5%B7%9D%E7%9C%8C%E9%AB%98%E6%9D%BE%E5%B8%82%E5%A4%A9%E7%A5%9E%E5%89%8D10%E7%95%AA5%E5%8F%B7&output=embed"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                    title="Takamatsu Office Map"
                                    className="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Company;
