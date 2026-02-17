import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Quiz from './components/Quiz';
import BookingForm from './components/BookingForm';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-gray-200">
      <Header />
      <main>
        <Hero />
        <Destinations />
        <Quiz />
        <BookingForm />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
