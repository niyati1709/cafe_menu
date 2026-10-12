const menu = {
    bestseller: [
        { name: 'Cappuccino', description: 'Espresso with steamed milk foam.', price: '$4.50' },
        { name: 'Classic Burger', description: 'Grilled patty with lettuce and house sauce.', price: '$8.00' }
    ],
    drinks: [
        { name: 'Iced Latte', description: 'Chilled espresso poured over milk.', price: '$4.75' },
        { name: 'Fresh Lemonade', description: 'Freshly squeezed lemon with a hint of mint.', price: '$3.50' }
    ],
    mojito: [
        { name: 'Classic Mojito', description: 'Mint, lime, soda, and a touch of sweetness.', price: '$5.50' },
        { name: 'Mango Mojito', description: 'Mango blended with lime and fresh mint.', price: '$5.75' }
    ],
    chinese: [
        { name: 'Veg Hakka Noodles', description: 'Stir-fried noodles with crisp vegetables.', price: '$8.50' },
        { name: 'Chilli Paneer', description: 'Paneer tossed in a spicy Indo-Chinese sauce.', price: '$9.00' }
    ],
    italian: [
        { name: 'Margherita Pizza', description: 'Tomato, mozzarella, and fresh basil.', price: '$10.00' },
        { name: 'Penne Alfredo', description: 'Penne pasta in a creamy parmesan sauce.', price: '$9.50' }
    ],
    'main-course': [
        { name: 'Grilled Chicken Bowl', description: 'Grilled chicken served with rice and greens.', price: '$12.00' },
        { name: 'Paneer Rice Bowl', description: 'Spiced paneer with rice and seasonal vegetables.', price: '$10.50' }
    ],
    'south-indian': [
        { name: 'Masala Dosa', description: 'Crisp dosa filled with seasoned potatoes.', price: '$7.50' },
        { name: 'Idli Sambar', description: 'Steamed rice cakes served with sambar.', price: '$6.00' }
    ],
    desserts: [
        { name: 'Chocolate Brownie', description: 'Warm chocolate brownie with a soft center.', price: '$5.00' },
        { name: 'Classic Cheesecake', description: 'Creamy cheesecake with a biscuit base.', price: '$5.50' }
    ],
    snacks: [
        { name: 'French Fries', description: 'Golden fries with a light seasoning.', price: '$4.00' },
        { name: 'Garlic Bread', description: 'Toasted bread with garlic and herbs.', price: '$4.50' }
    ]
};

const categoryButtons = [...document.querySelectorAll('.category')];
const menuSections = [...document.querySelectorAll('.menu-section')];
const categories = document.getElementById('categories');

for (const section of menuSections) {
    const dishes = menu[section.dataset.category];
    const dishList = section.querySelector('.dish-list');
    const isBestsellerSection = section.dataset.category === 'bestseller';

    for (const dish of dishes) {
        const card = document.createElement('article');
        card.className = isBestsellerSection ? 'dish dish--bestseller' : 'dish';

        const description = document.createElement('div');
        description.className = 'dish_description';

        const name = document.createElement('h2');
        name.className = 'dish_name';
        name.textContent = dish.name;

        const details = document.createElement('p');
        details.className = 'dish_descp';
        details.textContent = dish.description;

        const price = document.createElement('div');
        price.className = 'dish_price';
        price.textContent = dish.price;

        description.append(name, details);

        if (isBestsellerSection) {
            const image = document.createElement('div');
            image.className = 'dish_image';
            image.setAttribute('aria-hidden', 'true');
            card.append(image, description, price);
        } else {
            card.append(description, price);
        }

        dishList.append(card);
    }
}

for (const button of categoryButtons) {
    button.addEventListener('click', () => {
        const section = document.getElementById(`section-${button.dataset.category}`);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

let activeCategory = null;

function updateActiveCategory() {
    const activationLine = categories.getBoundingClientRect().bottom + 16;
    let visibleCategory = menuSections[0].dataset.category;

    for (const section of menuSections) {
        if (section.getBoundingClientRect().top > activationLine) {
            break;
        }
        visibleCategory = section.dataset.category;
    }

    for (const button of categoryButtons) {
        const isActive = button.dataset.category === visibleCategory;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-current', isActive ? 'true' : 'false');

        if (isActive && activeCategory !== visibleCategory) {
            button.scrollIntoView({
                behavior: activeCategory === null ? 'auto' : 'smooth',
                block: 'nearest',
                inline: 'nearest'
            });
        }
    }

    activeCategory = visibleCategory;
}

let scrollUpdatePending = false;
window.addEventListener('scroll', () => {
    if (!scrollUpdatePending) {
        window.requestAnimationFrame(() => {
            updateActiveCategory();
            scrollUpdatePending = false;
        });
        scrollUpdatePending = true;
    }
}, { passive: true });
window.addEventListener('resize', updateActiveCategory);
updateActiveCategory();