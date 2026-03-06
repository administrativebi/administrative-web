'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { BarChart3, Users } from 'lucide-react';

export function ValuePropSection() {
    const t = useTranslations('ValueProp');

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="flex-1 w-full text-center md:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
                        >
                            {t('title1')} <br />
                            <span className="text-blue-600 font-black">{t('title2')}</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-600 font-sans leading-relaxed mb-8"
                        >
                            {t('subtitle')}
                        </motion.p>
                    </div>

                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all"
                        >
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('b1_title')}</h3>
                            <p className="text-slate-600 font-sans text-sm">{t('b1_desc')}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform"
                        >
                            <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('b2_title')}</h3>
                            <p className="text-slate-600 font-sans text-sm">{t('b2_desc')}</p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
