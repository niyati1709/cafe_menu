import DishCard from './DishCard';
import BestsellerCarousel from './BestsellerCarousel';

export default function MenuSection({ category, dishes }) {
  const isBestseller = category.id === 'bestseller';

  if (isBestseller) {
    return (
      <section
        className="menu-section menu-section--bestseller"
        id={`section-${category.id}`}
        data-category={category.id}
      >
        <BestsellerCarousel dishes={dishes} title={category.label} />
      </section>
    );
  }

  return (
    <section
      className="menu-section"
      id={`section-${category.id}`}
      data-category={category.id}
    >
      <h2 className="section-title">{category.label}</h2>
      <div className="dish-list">
        {dishes &&
          dishes.map((dish, index) => (
            <DishCard
              key={`${dish.name}-${index}`}
              dish={dish}
              isBestseller={false}
            />
          ))}
      </div>
    </section>
  );
}

