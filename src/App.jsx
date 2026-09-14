import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import FeaturedCollections from './components/FeaturedCollections';
import LookbookShowcase from './components/LookbookShowcase';
import ChooseYourFighter from './components/ChooseYourFighter';
import CommunitySection from './components/CommunitySection';
import NewsletterArch from './components/NewsletterArch';
import ProductsPage from './components/ProductsPage';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    return (hash === '#products' || hash === '#men' || hash === '#women' || hash.startsWith('#products')) ? 'products' : 'home';
  });

  const [cart, setCart] = useState([
    {
      id: 'hero-white-poplin',
      name: 'White Poplin Shirt & Noir Trousers',
      price: 370,
      quantity: 1,
      size: 'M',
      image: '/white-poplin-cutout.png',
      category: 'Atelier Poplin Set'
    }
  ]);
  
  const [wishlist, setWishlist] = useState(['hero-white-poplin', 'hero-navy-crewneck', 'hero-navy-linen-model']);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGender, setSelectedGender] = useState(() => {
    if (window.location.hash === '#men') return 'men';
    if (window.location.hash === '#women') return 'women';
    return 'all';
  });

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#men') {
        setCurrentPage('products');
        setSelectedGender('men');
      } else if (window.location.hash === '#women') {
        setCurrentPage('products');
        setSelectedGender('women');
      } else if (window.location.hash.startsWith('#products')) {
        setCurrentPage('products');
      } else if (window.location.hash === '#home' || window.location.hash === '') {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page, category = 'All', gender = null) => {
    setCurrentPage(page);
    if (category) {
      setSelectedCategory(category);
    }
    if (gender) {
      setSelectedGender(gender);
    }
    if (page === 'products') {
      window.location.hash = gender === 'men' ? 'men' : gender === 'women' ? 'women' : 'products';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = 'home';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id && item.size === (product.size || 'M'));
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === (product.size || 'M')
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name || product.title,
          price: product.price,
          quantity: product.quantity || 1,
          size: product.size || 'M',
          color: product.color || product.selectedColor || null,
          image: product.image,
          category: product.category || 'Atelier Garment'
        }
      ];
    });
    showToast(`Added "${product.name || product.title}" to Bag`);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleToggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    const item = wishlist.includes(id) ? 'Removed from' : 'Saved to';
    showToast(`${item} Wishlist`);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a1a] flex flex-col font-sans selection:bg-[#121212] selection:text-white">
      
      {/* 1. Header Navigation */}
      <Navbar
        cartCount={totalCartCount}
        currentPage={currentPage}
        activeCategory={selectedCategory}
        activeGender={selectedGender}
        onNavigate={handleNavigate}
        onOpenCart={() => setIsCartOpen(true)}
        onSearchClick={() => setIsSearchOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {currentPage === 'products' ? (
          /* Dedicated Products Page (Ugmonk Minimalist Aesthetic & Wooden Clothes Rail Hero) */
          <ProductsPage
            initialCategory={selectedCategory}
            initialGender={selectedGender}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlist={wishlist}
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : (
          /* Editorial Runway & Brand Landing Page */
          <>
            {/* 2. Hero Section */}
            <Hero
              onAddToCart={handleAddToCart}
              onQuickView={() => setIsCartOpen(true)}
              onToggleWishlist={handleToggleWishlist}
              wishlist={wishlist}
            />

            {/* 3. Marquee Ticker Strip 1 */}
            <MarqueeBanner />

            {/* 4. Featured Collections (Color Meets Clarity) */}
            <FeaturedCollections
              onSelectCollection={() => {
                const el = document.getElementById('lookbook');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 5. Architectural Showcase & Tonal Rich Slider */}
            <LookbookShowcase
              onAddToCart={handleAddToCart}
            />

            {/* 6. Zudio Runway & Atelier Configurator */}
            <ChooseYourFighter
              onAddToCart={handleAddToCart}
            />

            {/* 7. ZUDIO Community + Marquee Ticker 2 */}
            <CommunitySection />

            {/* 8. Step Into Your Power Newsletter Archway */}
            <NewsletterArch />
          </>
        )}
      </main>

      {/* 9. Grand Editorial Footer */}
      <Footer />

      {/* Interactive Utilities */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => handleAddToCart(p)}
      />

      {/* Floating Feedback Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#121212] text-white px-5 py-3 rounded-xl shadow-2xl border border-neutral-700 flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span className="text-xs font-medium tracking-wide">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
