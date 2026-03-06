import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ValuePropSection } from '@/components/ValuePropSection';
import { AboutSection } from '@/components/AboutSection';
import { PaasFeatures } from '@/components/PaasFeatures';
import { PortfolioSection } from '@/components/PortfolioSection';
import { useTranslations } from 'next-intl';

export default function Home() {
  const tCTA = useTranslations('CTA');
  const tFooter = useTranslations('Footer');

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-200 selection:text-blue-900">
      <Header />

      {/* 1. Somos um escritório de performance */}
      <HeroSection />

      {/* 2. Queremos ser seu escritório de performance */}
      <ValuePropSection />

      {/* 3. Nosso Método */}
      <AboutSection />

      {/* 4. Pilares e Produtos */}
      <PaasFeatures />

      {/* 5. Portfólio */}
      <PortfolioSection />

      {/* 6. Call to Action */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight leading-tight">
            {tCTA('title')}
          </h2>
          <p className="text-xl mb-10 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {tCTA('subtitle')}
          </p>
          <button className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 active:scale-95 transition-all w-full sm:w-auto">
            {tCTA('button')}
          </button>
        </div>
      </section>

      {/* Footer Minimalista Moderno */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm font-sans">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-heading font-black tracking-tight text-white text-lg">
              ADMINISTRATIVE<span className="text-blue-500">.</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 font-medium">
              <a href="#" className="hover:text-blue-400 transition-colors">{tFooter('terms')}</a>
              <a href="#" className="hover:text-blue-400 transition-colors">{tFooter('privacy')}</a>
              <a href="#" className="hover:text-white transition-colors">{tFooter('contact')}</a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {tFooter('rights')}
          </div>
        </div>
      </footer>
    </main>
  );
}
