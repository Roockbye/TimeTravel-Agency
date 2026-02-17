import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Quiz from './components/Quiz';
import BookingForm from './components/BookingForm';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-gray-200 noise-overlay">
      <Header />
      <main>
        <Hero />
        <SectionDivider icon="◈" label="Destinations" />
        <Destinations />
        <SectionDivider icon="✦" label="Diagnostic" />
        <Quiz />
        <SectionDivider icon="⬡" label="Réservation" />
        <BookingForm />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
