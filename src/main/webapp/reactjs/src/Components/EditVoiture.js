import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faUndo } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import MyToast from "./MyToast";
import axios from "axios";

const formFields = [
    { name: "marque", label: "Marque", type: "text", placeholder: "Marque" },
    { name: "modele", label: "Modèle", type: "text", placeholder: "Modèle" },
    { name: "couleur", label: "Couleur", type: "text", placeholder: "Couleur" },
    { name: "immatricule", label: "Immatricule", type: "text", placeholder: "Immatricule" },
    { name: "prix", label: "Prix", type: "number", placeholder: "Prix" },
    { name: "annee", label: "Année", type: "number", placeholder: "Année" },
];

const inputClassName =
    "w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm text-slate-800 shadow-sm transition focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200";

class EditVoiture extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.initialState,
            showSuccessToast: false,
            successMessage: '',
        };
        this.voitureChange = this.voitureChange.bind(this);
        this.submitVoiture = this.submitVoiture.bind(this);
    }

    initialState = {
        showSuccessToast: false,
        successMessage: '',
        marque: '',
        modele: '',
        couleur: '',
        immatricule: '',
        prix: '',
        annee: '',
    }

    componentDidMount() {
        const { id } = this.props;
        axios.get(`http://localhost:8083/voitures/${id}`)
            .then(response => {
                const { marque, modele, couleur, immatricule, prix, annee } = response.data;
                this.setState({ marque, modele, couleur, immatricule, prix, annee });
            });
    }

    voitureChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    resetVoiture = () => {
        this.setState(this.initialState);
    }

    submitVoiture = (event) => {
        event.preventDefault();
        const { id } = this.props;

        const voiture = {
            id,
            marque: this.state.marque,
            modele: this.state.modele,
            couleur: this.state.couleur,
            immatricule: this.state.immatricule,
            annee: this.state.annee,
            prix: this.state.prix,
            proprietaire: {
                id: 1,
                nom: 'n',
                prenom: 'p'
            }
        };

        axios.put(`http://localhost:8083/voitures/${id}`, voiture)
            .then(response => {
                if (response.data != null) {
                    this.setState({ showSuccessToast: true, successMessage: "Voiture modifiée avec succès." });
                    setTimeout(() => this.setState({ showSuccessToast: false }), 3000);
                }
            });
    };

    render() {
        return (
            <section className="relative">
                <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-card backdrop-blur animate-fade-up">
                    <MyToast show={this.state.showSuccessToast} message={this.state.successMessage} />
                    <div className="h-1.5 w-full bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300" />

                    <div className="border-b border-slate-200/70 bg-white/80 px-6 py-5">
                        <h5 className="text-lg font-display tracking-[0.12em] text-slate-900">
                            Modifier une Voiture
                        </h5>
                        <p className="mt-1 text-sm text-slate-500">Modifiez les champs souhaités</p>
                    </div>

                    <form onReset={this.resetVoiture} onSubmit={this.submitVoiture}>
                        <div className="px-6 py-6">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                {formFields.map((field) => (
                                    <label
                                        key={field.name}
                                        className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                                    >
                                        <span className="mb-2 block">{field.label}</span>
                                        <input
                                            name={field.name}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            value={this.state[field.name]}
                                            className={inputClassName}
                                            onChange={this.voitureChange}
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-end gap-3 border-t border-slate-200/70 bg-slate-50/80 px-6 py-4">
                            <button
                                type="reset"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-slate-600 transition hover:border-slate-400 hover:text-slate-800"
                            >
                                <FontAwesomeIcon icon={faUndo} className="text-xs" /> Reset
                            </button>
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300 px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-rose-500/30 transition hover:scale-[1.01]"
                            >
                                <FontAwesomeIcon icon={faSave} className="text-xs" /> Enregistrer
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default EditVoiture;