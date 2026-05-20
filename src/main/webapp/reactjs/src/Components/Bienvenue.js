import React from "react";

const Bienvenue = () => {
    return (
        <section className="relative flex min-h-[calc(100vh-220px)] items-center justify-center">
            <div className="pointer-events-none absolute -top-20 right-10 h-40 w-40 rounded-full bg-rose-500/20 blur-3xl animate-float" />
            <div className="w-full max-w-2xl">
                <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-card backdrop-blur animate-fade-up">
                    <div className="h-1.5 w-full bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300" />
                    <div className="p-8 text-center sm:p-10">
                        <h1 className="text-3xl font-display tracking-[0.1em] text-slate-900 sm:text-4xl">
                            Bienvenue au Magasin des Voitures
                        </h1>
                        <p className="mt-3 text-sm text-slate-600 sm:text-base">
                            Le meilleur de nos voitures est exposé près de chez vous.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bienvenue;