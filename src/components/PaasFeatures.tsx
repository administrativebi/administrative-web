'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const featuresData = [
    { t_title: 'f1_title', t_desc: 'f1_desc' },
    { t_title: 'f2_title', t_desc: 'f2_desc' },
    { t_title: 'f3_title', t_desc: 'f3_desc' },
    { t_title: 'f4_title', t_desc: 'f4_desc' },
    { t_title: 'f5_title', t_desc: 'f5_desc' },
    { t_title: 'f6_title', t_desc: 'f6_desc' }
];

export function PaasFeatures() {
    const t = useTranslations('Pillars');

    return (
        <section className="py-24 bg-white relative border-t border-slate-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center md:text-left mb-20 max-w-3xl mx-auto md:mx-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                            {t('badge')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
                            {t('title1')} <span className="text-blue-600">{t('title2')}</span>
                        </h2>

                        <p className="text-lg text-slate-600 font-sans leading-relaxed">
                            {t('subtitle')}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresData.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                            className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors duration-300">
                                {t(feature.t_title as any)}
                            </h3>
                            <p className="text-slate-600 font-sans text-base leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                                {t(feature.t_desc as any)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
