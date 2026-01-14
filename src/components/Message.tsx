import React from 'react';

const Message = () => {
    return (
        <section id="message" className="py-24 bg-white">
            <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center md:text-left">
                <span className="block text-brand-green font-bold tracking-widest text-sm mb-2">MESSAGE</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-8">
                    代表挨拶
                </h2>
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                    「つなぐ」ことで、<br />
                    新しい価値を創造する。
                </h3>
                <div className="text-left">
                    <p className="text-gray-600 leading-loose mb-6">
                        私たちは、これまで約20年間にわたり、IT機器のオンサイトサポートに携わってきました。<br />
                        現場でお困りごとを解決し、お客様がITを「実際に使う瞬間」を支えることに、大きなやりがいを感じてきました。
                    </p>
                    <p className="text-gray-600 leading-loose mb-6">
                        その想いをさらに形にするため、2025年に当社を創業しました。<br />
                        社名には “お客様がIT機器を手に取り、使い始めるその最後の一歩” を支える存在でありたいという願いを込めています。
                    </p>
                    <p className="text-gray-600 leading-loose mb-8">
                        私たちは、個人・法人を問わず、ITを安心して使えるよう寄り添い続ける企業でありたいと考えています。<br />
                        一人ひとりの「困った」にまっすぐ向き合い、これからも誠実にサポートを提供してまいります。
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Message;
