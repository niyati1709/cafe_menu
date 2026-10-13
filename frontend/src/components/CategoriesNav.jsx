export default function CategoriesNav({
  categories,
  activeCategory,
  onSelectCategory,
  navRef,
  setButtonRef,
}) {
  return (
    <nav id="categories" aria-label="Menu categories" ref={navRef}>
      {categories.map((cat) => {
        const isActive = cat.id === activeCategory;
        return (
          <button
            key={cat.id}
            ref={(el) => setButtonRef(cat.id, el)}
            className={`category ${isActive ? 'active' : ''}`}
            type="button"
            data-category={cat.id}
            aria-current={isActive ? 'true' : 'false'}
            onClick={() => onSelectCategory(cat.id)}
          >
            {cat.label}
          </button>
        );
      })}
    </nav>
  );
}
