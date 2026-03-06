'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export function AudienceSection() {
    const t = useTranslations('Audience');

    const targets = [
        { t_title: 't1_title', t_desc: 't1_desc', numero: "01" },
        { t_title: 't2_title', t_desc: 't2_desc', numero: "02" },
        { t_title: 't3_title', t_desc: 't3_desc', numero: "03" },
        { t_title: 't4_title', t_desc: 't4_desc', numero: "04" }
    ];

    return (
        <section className="py-32 md:py-48 bg-[#050608] text-white relative border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center md:text-left mb-24 max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-tighter">
                            {t('title1')} <br />
                            <span className="font-semibold text-gradient-premium">{t('title2')}</span>
                        </h2>
                        <p className="text-xl text-zinc-400 font-light">
                            {t('subtitle')}
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {targets.map((target, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col group"
                        >
                            <div className="text-7xl font-light text-zinc-800 mb-8 transition-colors duration-500 group-hover:text-[#364f6b]">
                                {target.numero}
                            </div>

                            <h3 className="text-2xl font-medium mb-4 text-white tracking-tight">{t(target.t_title as any)}</h3>
                            <p className="text-base text-zinc-500 font-light leading-relaxed">
                                {t(target.t_desc as any)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
