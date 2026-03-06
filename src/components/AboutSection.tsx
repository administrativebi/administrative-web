'use client';

import { motion } from 'framer-motion';
import { Target, Activity, TrendingUp, Settings } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function AboutSection() {
    const t = useTranslations('Method');

    const objectives = [
        { icon: <Activity className="w-6 h-6" />, t_title: 'obj1_title', t_desc: 'obj1_desc' },
        { icon: <Target className="w-6 h-6" />, t_title: 'obj2_title', t_desc: 'obj2_desc' },
        { icon: <Settings className="w-6 h-6" />, t_title: 'obj3_title', t_desc: 'obj3_desc' },
        { icon: <TrendingUp className="w-6 h-6" />, t_title: 'obj4_title', t_desc: 'obj4_desc' },
    ];

    return (
        <section className="py-24 bg-slate-50 relative border-t border-slate-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    <div className="flex-1 w-full relative">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-3 mb-8">
                                <span className="w-8 h-[2px] bg-blue-600 rounded"></span>
                                <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">
                                    {t('badge')}
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.15] tracking-tight">
                                {t('title1')} <br />
                                <span className="text-blue-600">{t('title2')}</span>
                            </h2>

                            <div className="space-y-6 text-slate-600 text-lg font-sans leading-relaxed">
                                <p>{t('p1')}</p>
                                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm border-l-4 border-l-blue-600">
                                    <p className="font-medium text-slate-800">{t('p2')}</p>
                                </div>
                                <p>{t('p3')}</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {objectives.map((obj, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl mb-6">
                                    {obj.icon}
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{t(obj.t_title as any)}</h4>
                                <p className="text-slate-600 font-sans text-sm leading-relaxed">{t(obj.t_desc as any)}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
