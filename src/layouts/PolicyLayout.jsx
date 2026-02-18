import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PolicyLayout({ title, subtitle, lastUpdated, children }) {
  return (
    <div className="bg-white min-h-screen font-urbanist pb-20">
      {/* --- HEADER --- */}
      <header className="bg-slate-50 pt-40 pb-16 border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="flex items-center gap-2 text-slate-400 text-[10px] font-bold capitalize tracking-[0.3em] mb-6">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight size={10} />
              <span className="text-slate-900">{title}</span>
            </nav>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-slate-900  capitalize leading-none mb-6">
              {title.split(' ').slice(0, -1).join(' ')} <span className="text-blue-600 italic">{title.split(' ').slice(-1)}</span>
            </h1>
            {subtitle && (
              <p className="text-slate-500 text-lg font-bold max-w-2xl mb-8 leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold capitalize tracking-widest">
              <Clock size={14} className="text-blue-600" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- CONTENT --- */}
      <article className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl prose prose-slate prose-headings:font-bold prose-headings:capitalize prose-headings: prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900 prose-a:text-blue-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline"
        >
          {children}
        </motion.div>
      </article>
    </div>
  );
}
