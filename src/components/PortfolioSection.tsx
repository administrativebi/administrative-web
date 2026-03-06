'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Building2, Store, Utensils, Workflow } from 'lucide-react';

export function PortfolioSection() {
    const t = useTranslations('Portfolio');

    const clients = [
        { t_name: 'client1', icon: <Building2 className="w-8 h-8" /> },
        { t_name: 'client2', icon: <Store className="w-8 h-8" /> },
        { t_name: 'client3', icon: <Utensils className="w-8 h-8" /> },
        { t_name: 'client4', icon: <Workflow className="w-8 h-8" /> }
    ];

    return (
        <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-blue-200 font-bold tracking-widest text-xs uppercase mb-4 block">
                            {t('badge')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-[1.15]">
                            {t('title1')} <br /> <span className="text-blue-200">{t('title2')}</span>
                        </h2>
                        <p className="text-lg text-blue-100 font-sans mx-auto max-w-2xl">
                            {t('subtitle')}
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                    {clients.map((client, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                            className="flex items-center gap-4 bg-white/10 px-8 py-5 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                        >
                            <div className="text-blue-200">
                                {client.icon}
                            </div>
                            <span className="font-bold text-lg">{t(client.t_name as any)}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
