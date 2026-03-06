'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export function HeroSection() {
    const t = useTranslations('Hero');

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
            {/* Video Background Premium */}
            <div className="absolute inset-0 z-0 w-full h-full bg-slate-900">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline /* Indispensável para o vídeo rodar sozinho no Mobile (iOS/Android) */
                    className="w-full h-full object-cover opacity-75"
                >
                    <source src="https://srsj1mumwmo8dpcm.public.blob.vercel-storage.com/lights.mp4" type="video/mp4" />
                </video>

                {/* Overlays inteligentes para garantir leitura perfeita (Acessibilidade) */}
                <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-slate-900/60 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-12 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-white/5 backdrop-blur-md shadow-sm"
                >
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                    <span className="text-xs font-bold tracking-widest text-blue-100 uppercase">
                        {t('badge')}
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.15] text-white max-w-5xl"
                >
                    {t('title1')} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white drop-shadow-md">
                        {t('title2')}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-blue-50/80 max-w-2xl mb-12 leading-relaxed font-sans"
                >
                    {t('subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 active:scale-95">
                        {t('cta1')}
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all active:scale-95 text-base hover:border-white/40">
                        {t('cta2')}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
