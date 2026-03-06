'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Header() {
    const { scrollY } = useScroll();
    const t = useTranslations('Header');

    const background = useTransform(
        scrollY,
        [0, 50],
        ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']
    );

    const backdropFilter = useTransform(
        scrollY,
        [0, 50],
        ['blur(0px)', 'blur(8px)']
    );

    const borderBottom = useTransform(
        scrollY,
        [0, 50],
        ['1px solid rgba(226,232,240,0)', '1px solid rgba(226,232,240,1)']
    );

    const shadow = useTransform(
        scrollY,
        [0, 50],
        ['none', '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)']
    )

    return (
        <motion.header
            style={{ backdropFilter, borderBottom, boxShadow: shadow }}
            className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-white/95"
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Logo */}
                    <span className="font-heading font-black tracking-tighter text-2xl text-slate-900">
                        ADMINISTRATIVE<span className="text-blue-600">.</span>
                    </span>
                </motion.div>

                <motion.nav
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="hidden md:flex items-center gap-8 font-sans text-sm font-semibold text-slate-600"
                >
                    <a href="#" className="hover:text-blue-600 transition-colors">{t('method')}</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">{t('pillars')}</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">{t('portfolio')}</a>
                </motion.nav>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <button className="hidden md:block bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 transition-all">
                        {t('cta')}
                    </button>
                    <button className="md:hidden text-slate-900 hover:text-blue-600 transition-colors">
                        <Menu className="w-6 h-6" />
                    </button>
                </motion.div>
            </div>
        </motion.header>
    );
}
