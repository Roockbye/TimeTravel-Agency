import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[ErrorBoundary]', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dark flex items-center justify-center p-4">
          <div className="glass-card rounded-2xl p-10 max-w-md text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <span className="text-2xl">⚠️</span>
            </div>
            <h2 className="font-serif text-2xl text-white mb-3">
              Anomalie temporelle détectée
            </h2>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Une perturbation a été détectée dans le flux chrono-dimensionnel.
              Nos ingénieurs temporels travaillent à la résolution.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-gradient-to-r from-gold to-gold-light text-dark font-bold rounded-full text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-gold/25 transition-all"
            >
              Réinitialiser le portail
            </button>
            {import.meta.env.DEV && this.state.error && (
              <pre className="mt-6 text-left text-xs text-red-400/70 bg-dark p-3 rounded-lg overflow-auto max-h-40">
                {this.state.error.toString()}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
