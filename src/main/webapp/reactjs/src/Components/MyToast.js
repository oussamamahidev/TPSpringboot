import { Component } from 'react';

export default class MyToast extends Component {
    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="fixed right-5 top-20 z-50 animate-fade-up" role="status" aria-live="polite">
                <div className="w-[280px] overflow-hidden rounded-2xl border border-emerald-200/70 bg-white shadow-[0_12px_32px_-18px_rgba(15,23,42,0.45)]">
                    <div className="flex items-center justify-between border-b border-emerald-100 bg-emerald-50 px-4 py-2">
                        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-emerald-700">
                            ✓ Succès
                        </span>
                    </div>
                    <div className="px-4 py-3 text-sm text-slate-700">
                        {this.props.message}
                    </div>
                </div>
            </div>
        );
    }
}