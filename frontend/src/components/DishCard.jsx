export default function DishCard({ dish, isBestseller }) {
  return (
    <article className={isBestseller ? 'dish dish--bestseller' : 'dish'}>
      {isBestseller && (
        <div className="dish_image" aria-hidden="true">
          {dish.image && <img src={dish.image} alt={dish.name} />}
        </div>
      )}
      <div className="dish_description">
        <h2 className="dish_name">{dish.name}</h2>
        <p className="dish_descp">{dish.description}</p>
      </div>
      <div className="dish_price">{dish.price}</div>
    </article>
  );
}
