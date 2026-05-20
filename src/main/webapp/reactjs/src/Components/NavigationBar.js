import React from 'react';

const NavigationBar = () => {
    return (
        <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
                <a href="/" className="group flex items-center gap-3">
                    <span className="text-lg font-display tracking-[0.2em] text-white">
                        AUTO<span className="text-rose-400">GARAGE</span>
                    </span>
                </a>

                <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                    <a
                        href="/add"
                        className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/30 hover:text-white hover:bg-white/10"
                    >
                        Ajouter Voiture
                    </a>
                    <a
                        href="/list"
                        className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/30 hover:text-white hover:bg-white/10"
                    >
                        Liste Voitures
                    </a>
                </nav>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300" />
        </header>
    );
};

export default NavigationBar;