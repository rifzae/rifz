import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisionMission from './components/VisionMission';
import ProductCatalog from './components/ProductCatalog';
import CollaborationSection from './components/CollaborationSection';
import Testimonials from './components/Testimonials';
import Lookbook from './components/Lookbook';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import FAQ from './components/FAQ';
import StylistAI from './components/StylistAI';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer'; // PENTING: Import CartDrawer
import { CartProvider } from './context/CartContext'; // PENTING: Import Provider
import { Product } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [productFilter, setProductFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'vision', 'products', 'collab', 'lookbook', 'testimonials', 'faq', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFilterChange = (filter: string) => {
    setProductFilter(filter);
    const productSection = document.getElementById('products');
    if (productSection) {
      // Scroll sedikit di atas section agar judul terlihat
      const offset = 80;
      const elementPosition = productSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    // PENTING: CartProvider harus membungkus seluruh aplikasi
    <CartProvider>
      <div className="relative overflow-x-hidden bg-black min-h-screen text-white selection:bg-red-600 selection:text-white">
        
        <Navbar activeSection={activeSection} />
        
        {/* CartDrawer diletakkan di sini agar bisa muncul di atas konten lain */}
        <CartDrawer /> 
        
        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="about" className="bg-zinc-950 py-24">
            <About />
          </section>

          <section id="vision" className="bg-black py-24">
            <VisionMission />
          </section>

          <section id="products" className="bg-zinc-950 py-24">
            {/* Pastikan ProductCatalog menerima props filter & setFilter */}
            <ProductCatalog 
              filter={productFilter} 
              setFilter={setProductFilter} 
              onViewDetail={(p) => setSelectedProduct(p)} 
            />
          </section>

          <section id="collab" className="bg-black py-24">
            <CollaborationSection onFilterChange={handleFilterChange} />
          </section>

          <section id="lookbook" className="bg-zinc-950 py-24">
            <Lookbook />
          </section>

          <section id="testimonials" className="bg-black py-24">
            <Testimonials />
          </section>

          <section id="faq" className="bg-zinc-950 py-24">
            <FAQ />
          </section>

          <section id="contact" className="bg-black py-24">
            <Contact />
          </section>

          <Newsletter />
        </main>

        <Footer onFilterChange={handleFilterChange} />
        
        <StylistAI />

        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </div>
    </CartProvider>
  );
};

export default App;
