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

                <div className="grid md:grid-cols-2 gap-12">
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
                                        <div className="mb-6">
                                            <span className="font-bold block text-gray-800 mb-1">本社</span>
                                            〒730-0845<br />
                                            広島県広島市中区舟入川口町13-35戸倉ビル
                                        </div>
                                        <div className="mb-6">
                                            <span className="font-bold block text-gray-800 mb-1">岡山営業所</span>
                                            〒700-0821<br />
                                            岡山県岡山市北区中山下1丁目11番15号<br />
                                            新田第1ビル402
                                        </div>
                                        <div>
                                            <span className="font-bold block text-gray-800 mb-1">高松営業所</span>
                                            〒760-0018<br />
                                            香川県高松市天神前10番5号<br />
                                            高松セントラルスカイビルディング 3F south
                                        </div>
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

                    <div className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-inner translate-y-0">
                        <iframe
                            width="100%"
                            height="100%"
                            id="gmap_canvas"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411.599225863498!2d132.440508765776!3d34.38116420350743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355aa25af5557877%3A0xf6384b883668d5c4!2z44CSNzMwLTA4NDUg5bqD5bO255yM5bqD5bO25biC5Lit5Yy66Iif5YWl5bed5Y-j55S677yR77yT4oiS77yT77yVIOaIuOWAieODk-ODqw!5e0!3m2!1sja!2sjp!4v1765878864369!5m2!1sja!2sjp"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            title="Google Maps"
                            className="w-full h-full grayscale-[0.5] hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Company;
