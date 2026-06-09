import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import FeatureStrip from './components/FeatureStrip';

export default function App() {
  return (
    <div className="font-sans">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <FeatureStrip />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </div>
  );
}
