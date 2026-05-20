import axios from 'axios';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import MyToast from './MyToast';

const tableHeaderClass =
    "px-4 py-3 text-left text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-slate-500";
const tableCellClass = "px-4 py-3 text-sm text-slate-700";
const actionButtonBase =
    "inline-flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:text-slate-800";

class VoitureListe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            voitures: []
        };
    }

    deleteVoiture = (voitureId) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer cette voiture ?")) {
            axios.delete("http://localhost:8083/voitures/" + voitureId)
                .then(response => {
                    if (response.data != null) {
                        this.setState({
                            voitures: this.state.voitures.filter(v => v.id !== voitureId),
                            show: true
                        });
                        setTimeout(() => this.setState({ show: false }), 3000);
                    }
                });
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8083/voitures")
            .then(response => response.data)
            .then(data => this.setState({ voitures: data }))
            .catch(error => console.error("ERROR : " + error));
    }

    render() {
        const { navigate } = this.props;

        return (
            <section className="relative">
                <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-card backdrop-blur animate-fade-up">
                    <MyToast show={this.state.show} message={"Voiture supprimée avec succès."} />
                    <div className="h-1.5 w-full bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300" />

                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/70 bg-white/80 px-6 py-5">
                        <div>
                            <h5 className="text-lg font-display tracking-[0.12em] text-slate-900">Liste des Voitures</h5>
                            <p className="mt-1 text-sm text-slate-500">
                                {this.state.voitures.length} véhicule(s)
                            </p>
                        </div>
                        <div className="h-3 w-3 rounded-full bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.6)]" />
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead className="bg-slate-50/80">
                                <tr>
                                    <th className={tableHeaderClass}>Marque</th>
                                    <th className={tableHeaderClass}>Modèle</th>
                                    <th className={tableHeaderClass}>Couleur</th>
                                    <th className={tableHeaderClass}>Immatricule</th>
                                    <th className={tableHeaderClass}>Année</th>
                                    <th className={tableHeaderClass}>Prix</th>
                                    <th className={tableHeaderClass}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.voitures.length === 0 ? (
                                    <tr>
                                        <td colSpan="7" className="px-6 py-10 text-center text-sm text-slate-400">
                                            Aucune voiture n'est disponible
                                        </td>
                                    </tr>
                                ) : (
                                    this.state.voitures.map((voiture) => (
                                        <tr key={voiture.id} className="border-t border-slate-100 hover:bg-rose-50/40">
                                            <td className={`${tableCellClass} font-semibold text-slate-800`}>{voiture.marque}</td>
                                            <td className={tableCellClass}>{voiture.modele}</td>
                                            <td className={tableCellClass}>{voiture.couleur}</td>
                                            <td className={tableCellClass}>{voiture.immatricule}</td>
                                            <td className={tableCellClass}>{voiture.annee}</td>
                                            <td className={tableCellClass}>{voiture.prix}</td>
                                            <td className={tableCellClass}>
                                                <div className="inline-flex overflow-hidden rounded-full bg-white shadow-sm">
                                                    <button
                                                        type="button"
                                                        onClick={() => navigate("/edit/" + voiture.id)}
                                                        className={`${actionButtonBase} rounded-l-full`}
                                                        aria-label="Modifier"
                                                    >
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => this.deleteVoiture(voiture.id)}
                                                        className={`${actionButtonBase} rounded-r-full text-rose-500 hover:text-rose-600`}
                                                        aria-label="Supprimer"
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        );
    }
}

const VoitureListeWrapper = () => {
    const navigate = useNavigate();
    return <VoitureListe navigate={navigate} />;
};

export default VoitureListeWrapper;