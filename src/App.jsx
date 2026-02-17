import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import SectionDivider from './components/SectionDivider';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy-load non-critical sections for better initial load
const Destinations = lazy(() => import('./components/Destinations'));
const Quiz = lazy(() => import('./components/Quiz'));
const BookingForm = lazy(() => import('./components/BookingForm'));
const Chatbot = lazy(() => import('./components/Chatbot'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-dark text-gray-200 noise-overlay">
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<LoadingSpinner />}>
            <SectionDivider icon="◈" label="Destinations" />
            <Destinations />
            <SectionDivider icon="✦" label="Diagnostic" />
            <Quiz />
            <SectionDivider icon="⬡" label="Réservation" />
            <BookingForm />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <Chatbot />
        </Suspense>
        <BackToTop />
      </div>
    </ErrorBoundary>
  );
}
