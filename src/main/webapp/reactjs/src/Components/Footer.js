import React from 'react';

const Footer = () => {
    const fullYear = new Date().getFullYear();
    return (
        <footer className="border-t border-white/10 bg-slate-950/90 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-4 text-center text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/50">
                {fullYear} - {fullYear + 1} · All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;