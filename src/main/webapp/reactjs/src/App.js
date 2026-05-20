import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import Bienvenue from './Components/Bienvenue';
import Voiture from './Components/Voiture';
import VoitureListe from './Components/VoitureListe';
import EditVoiture from './Components/EditVoiture';

const EditVoitureWrapper = () => {
    const { id } = useParams();
    return <EditVoiture id={id} />;
};

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-body">
            <div className="relative min-h-screen overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.2),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(251,146,60,0.18),_transparent_45%)]" />
                <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-rose-500/25 blur-3xl animate-float" />
                <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl animate-float" />

                <div className="relative flex min-h-screen flex-col">
                    <Router>
                        <NavigationBar />
                        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-6">
                            <Routes>
                                <Route path="/" element={<Bienvenue />} />
                                <Route path="/add" element={<Voiture />} />
                                <Route path="/list" element={<VoitureListe />} />
                                <Route path="/edit/:id" element={<EditVoitureWrapper />} />
                            </Routes>
                        </main>
                        <Footer />
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default App;