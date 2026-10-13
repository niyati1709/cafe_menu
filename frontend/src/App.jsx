import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import CategoriesNav from './components/CategoriesNav';
import MenuSection from './components/MenuSection';
import { CATEGORIES, MENU } from './menuData';
import './homepage.css';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('bestseller');
  const navRef = useRef(null);
  const buttonRefs = useRef({});
  const activeCategoryRef = useRef('bestseller');

  const setButtonRef = (id, el) => {
    if (el) {
      buttonRefs.current[id] = el;
    } else {
      delete buttonRefs.current[id];
    }
  };

  const handleSelectCategory = (categoryId) => {
    const section = document.getElementById(`section-${categoryId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    let scrollUpdatePending = false;

    const updateActiveCategory = () => {
      const categoriesEl = navRef.current;
      if (!categoriesEl) return;

      const activationLine = categoriesEl.getBoundingClientRect().bottom + 16;
      let visibleCategory = CATEGORIES[0].id;

      for (const cat of CATEGORIES) {
        const section = document.getElementById(`section-${cat.id}`);
        if (!section) continue;
        if (section.getBoundingClientRect().top > activationLine) {
          break;
        }
        visibleCategory = cat.id;
      }

      if (activeCategoryRef.current !== visibleCategory) {
        const button = buttonRefs.current[visibleCategory];
        if (button) {
          button.scrollIntoView({
            behavior: activeCategoryRef.current === null ? 'auto' : 'smooth',
            block: 'nearest',
            inline: 'nearest',
          });
        }
        activeCategoryRef.current = visibleCategory;
        setActiveCategory(visibleCategory);
      }
    };

    const handleScroll = () => {
      if (!scrollUpdatePending) {
        window.requestAnimationFrame(() => {
          updateActiveCategory();
          scrollUpdatePending = false;
        });
        scrollUpdatePending = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateActiveCategory);

    updateActiveCategory();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveCategory);
    };
  }, []);

  return (
    <div id="main">
      <Header />
      <div id="mainImage"></div>
      <CategoriesNav
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        navRef={navRef}
        setButtonRef={setButtonRef}
      />
      {CATEGORIES.map((cat) => (
        <MenuSection
          key={cat.id}
          category={cat}
          dishes={MENU[cat.id]}
        />
      ))}
    </div>
  );
}
