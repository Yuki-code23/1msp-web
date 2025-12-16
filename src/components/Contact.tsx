'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormInputs = {
    name: string;
    email: string;
    message: string;
};

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        setStatus('submitting');
        try {
            const response = await fetch('/api/send.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-brand-green/5">
            <div className="container mx-auto px-4 text-center">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
                    <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600">お気軽にお問い合わせください</p>
                </div>

                <div className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-lg text-left border border-gray-100">
                    {status === 'success' ? (
                        <div className="text-center py-10">
                            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">送信完了</h3>
                            <p className="text-gray-600 mb-4">お問い合わせありがとうございます。</p>
                            <button onClick={() => setStatus('idle')} className="text-brand-green font-bold hover:underline">
                                戻る
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-bold mb-2 ml-1" htmlFor="name">お名前 <span className="text-red-500">*</span></label>
                                <input
                                    id="name"
                                    {...register('name', { required: 'お名前は必須です' })}
                                    placeholder="例：山田 太郎"
                                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1 ml-1 flex items-center gap-1"><span className="text-xs">●</span> {errors.name.message}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 font-bold mb-2 ml-1" htmlFor="email">メールアドレス <span className="text-red-500">*</span></label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="例：info@example.com"
                                    {...register('email', {
                                        required: 'メールアドレスは必須です',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "有効なメールアドレスを入力してください"
                                        }
                                    })}
                                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1 ml-1 flex items-center gap-1"><span className="text-xs">●</span> {errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 font-bold mb-2 ml-1" htmlFor="message">お問い合わせ内容 <span className="text-red-500">*</span></label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="お問い合わせ内容をご記入ください"
                                    {...register('message', { required: 'お問い合わせ内容は必須です' })}
                                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all resize-none"
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1 ml-1 flex items-center gap-1"><span className="text-xs">●</span> {errors.message.message}</p>}
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-brand-orange text-white text-lg font-bold py-4 rounded-full shadow-lg hover:bg-orange-500 hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:bg-gray-300 disabled:shadow-none disabled:translate-y-0"
                                >
                                    {status === 'submitting' ? '送信中...' : '送信する'}
                                </button>
                            </div>

                            {status === 'error' && (
                                <p className="text-red-500 text-center mt-4 bg-red-50 py-2 rounded-lg">送信に失敗しました。時間をおいて再度お試しください。</p>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
