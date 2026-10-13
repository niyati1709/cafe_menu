export const CATEGORIES = [
  { id: 'bestseller', label: 'Bestseller' },
  { id: 'noon-n-eves', label: "Noon N' Eves" },
  { id: 'pizzeria', label: 'Pizzeria' },
  { id: 'all-day', label: 'All Day' },
  { id: 'pasta', label: 'Pasta' },
  { id: 'sizzlers', label: 'Sizzlers' },
  { id: 'lebanese', label: 'Lebanese Sides' },
  { id: 'falafel-sandwich', label: 'Falafel Sandwich' },
  { id: 'manakish', label: 'Manakish' },
  { id: 'salads-meals', label: 'Salads & Meals' },
  { id: 'dips-rice', label: 'Dips & Rice' },
];

export const MENU = {
  bestseller: [
    {
      name: 'Jalapeno Poppers Pizza 10 Inches',
      description: 'Red & Green Jalapeno, Onion & Two Types Of Cheese on hand-tossed 10" crust.',
      price: '₹540',
      image: '/images/jalapeno-poppers-pizza.jpg',
      imagePosition: 'center 75%',
    },
    {
      name: 'Exotic Garlic Bread',
      description: 'Toasted bread with exotic vegetables, melted cheese and garlic herbs.',
      price: '₹300',
      image: '/images/exotic-garlic-bread.png',
    },
    {
      name: 'Lebanese Rice',
      description: 'Steamed Rice Cooked In Spinach & Pepper Sauce.',
      price: '₹390',
      image: '/images/lebanese-rice.jpg',
    },
    {
      name: 'Mushroom Manakish',
      description: 'Cheese Manakish Topped With Sauted Mushroom and herbs.',
      price: '₹450',
      image: '/images/mushroom-manakish.jpg',
    },
    {
      name: 'Ravioli',
      description: 'Vegetable Filling Sealed Between Two Layers Of Pasta in rich sauce.',
      price: '₹560',
      image: '/images/ravioli.jpg',
    },
    {
      name: 'Cilantro Rice',
      description: 'Steamed Rice & Coriander, Bell Pepper With Combination Sauce.',
      price: '₹390',
      image: '/images/cilantro-rice.jpg',
      imagePosition: 'center 95%',
    },
    {
      name: 'Cheese Garlic Bread',
      description: 'Toasted bread with aromatic garlic butter and melted cheese.',
      price: '₹270',
      image: '/images/cheese-garlic-bread.png',
    },
    {
      name: 'Turkish Falafel',
      description: 'Fresh Veggies, Greens & Falafel In Spicy Traditional Muhammara.',
      price: '₹360',
      image: '/images/turkish-falafel.jpg',
    },
    {
      name: 'Babaganush',
      description: 'Smokey Eggplant, Tahini, Olive Oil.',
      price: '₹200',
      image: '/images/babaganush.jpg',
    },
    {
      name: 'Madrid Falafel',
      description: 'Farm Veggies, Greens & Falafel With Cheese In Hummus.',
      price: '₹300',
      image: '/images/madrid-falafel.jpg',
    },
    {
      name: 'Falafel Quesadilla',
      description: 'Tortilla Filled With Bell Peppers, Kidney Beans, Cheese & Falafel.',
      price: '₹360',
      image: '/images/falafel-quesadilla.jpg',
    },
    {
      name: 'Roasted Garlic Parmesan Hummus',
      description: 'Chickpea & tahini hummus blended with roasted garlic and parmesan.',
      price: '₹300',
      image: '/images/roasted-garlic-parmesan-hummus.png',
    },
    {
      name: 'Fattoush Salad',
      description: 'Toasted Pita With Greens & Farm Veggies, Lemon Olive Oil Dressing & Sumac.',
      price: '₹330',
      image: '/images/fattoush-salad.jpg',
    },
    {
      name: 'Cheese Nachos',
      description: 'Crispy corn tortilla chips baked with melted cheese and seasonings.',
      price: '₹350',
      image: '/images/cheese-nachos.jpg',
    },
    {
      name: 'Family Falafel Platter',
      description: '14 pcs Falafel Bites, 4 Pita Bread, Bowl Of Greens & Fresh Veggies, Hummus, Tahini, Labneh & Red Chilli With 2 Soft Drinks.',
      price: '₹900',
      image: '/images/family-falafel-platter.jpg',
    },
    {
      name: 'Mushroom Spaghetti Aglio Olio',
      description: 'Tossed Spaghetti, Garlic, Parsley, Sautéed Mushrooms & Garlic Olive Oil.',
      price: '₹520',
      image: '/images/mushroom-spaghetti-aglio-olio.jpg',
    },
    {
      name: 'Falafel Salad',
      description: 'Falafel Bullets, Greens & Fresh Veggies, Hummus & Labneh Dressing.',
      price: '₹370',
      image: '/images/falafel-salad.jpg',
    },
    {
      name: 'Alfredo Pasta',
      description: 'Cheese & Cream Sauce, Sprinkled With Aged Parmesan Cheese.',
      price: '₹460',
      image: '/images/alfredo-pasta.png',
    },
    {
      name: 'Indian Falafel',
      description: 'Fresh Veggies, Greens & Falafel Mix In Red Spicy Sauce.',
      price: '₹300',
      image: '/images/indian-falafel.png',
    },
    {
      name: 'Loaded Hummus',
      description: 'Hummus With Kalamata Olives, Parsley, Chickpeas, Black Olives, Pomegranate, Cherry Tomatoes & Feta Cheese.',
      price: '₹370',
      image: '/images/loaded-hummus.jpg',
    },
  ],

  'noon-n-eves': [
    {
      name: 'Spinach & Corn Sandwich',
      description: 'Toasted sandwich with seasoned spinach and sweet corn.',
      price: '₹270',
    },
    {
      name: 'Cheese Chilli Toastie',
      description: 'Melted cheese toastie with green chillies and herbs.',
      price: '₹240',
    },
    {
      name: '# Smoked Paneer Sandwich',
      description: 'Smokey paneer, cottage cheese with herbs and melted cheese on grilled bread.',
      price: '₹270',
    },
    {
      name: '# Edamame Falafel',
      description: 'Edamame & green pea falafel served with White bean hummus and muhammara.',
      price: '₹380',
    },
    {
      name: 'The Yummus Bowl',
      description: 'Mixed Greens, Hummus, Chickpea, Cucumber, Feta, Dates, Walnuts & dressing.',
      price: '₹320',
    },
    {
      name: 'Mac & Cheese Pasta',
      description: 'Macaroni Tossed in Garlic & Cheese Sauce Topped with crispy Onion & garlic crumbs.',
      price: '₹320',
    },
  ],

  pizzeria: [
    {
      name: 'Margherita',
      description: 'Tomato, mozzarella, basil, oregano, olive oil.',
      price: '₹290',
    },
    {
      name: 'Margherita Extra',
      description: 'Margherita with creamy burrata & basil pesto, olive oil.',
      price: '₹320',
    },
    {
      name: '# The Paneer People',
      description: 'Smokey Paneer, tomato, onion, mozzarella & basil, Parmesan.',
      price: '₹340',
    },
    {
      name: '# The Cheese Force',
      description: 'Ricotta, Buffalo mozzarella, Parmesan, Burrata, smoked chilli jam.',
      price: '₹400',
    },
    {
      name: 'Pizz & Love',
      description: 'Italian veggies, broccoli, mushrooms, onions, olives & pesto.',
      price: '₹340',
    },
    {
      name: 'Mushroom & Truffle',
      description: 'Truffle ricotta base, mozzarella, sautéed mushrooms & Parmesan.',
      price: '₹350',
    },
    {
      name: 'Padana Pizza',
      description: "Goat's Cheese, Caramelised Onions & Spinach With Mozzarella, Tomato, Garlic Oil & Onions.",
      price: '₹450',
    },
    {
      name: 'Siciliana Pizza',
      description: 'Mushroom, Garlic, Sun Dried Tomato, Olives With Fresh Mozzarella.',
      price: '₹450',
    },
    {
      name: 'Jalapeno Poppers Pizza 10 Inches',
      description: 'Red & Green Jalapeno, Onion & Two Types Of Cheese on 10" hand-tossed crust.',
      price: '₹540',
    },
    {
      name: 'Italian Ricotta Pizza',
      description: 'Spinach, Onion, Tomato, Ricotta Cheese Topped With Kernels.',
      price: '₹500',
    },
  ],

  'all-day': [
    {
      name: 'Salted Fries',
      description: 'Golden salted French fries.',
      price: '₹190',
    },
    {
      name: 'Cheese Chilli & Lime Fries',
      description: 'Fries seasoned with lime zest, green chilli and melted cheese.',
      price: '₹200',
    },
    {
      name: 'Garlic Parmesan Fries',
      description: 'Crisp fries tossed in garlic and grated parmesan.',
      price: '₹220',
    },
    {
      name: '# Marinated Olives',
      description: 'Selected olives marinated in herbs and olive oil.',
      price: '₹280',
    },
    {
      name: '# Mexican Cheese Ball',
      description: 'Crispy fried cheese balls served with savory spicy dip.',
      price: '₹300',
    },
    {
      name: 'Cheese Garlic Bread',
      description: 'Toasted bread with aromatic garlic butter and melted cheese.',
      price: '₹270',
    },
    {
      name: 'Exotic Garlic Bread',
      description: 'Toasted bread with exotic vegetables, herbs and garlic.',
      price: '₹300',
    },
    {
      name: 'Cheese Nachos',
      description: 'Crispy corn tortilla chips baked with melted cheese and seasonings.',
      price: '₹350',
    },
    {
      name: 'Bruschetta',
      description: 'Toasted bread topped with seasoned diced tomatoes and basil.',
      price: '₹300',
    },
    {
      name: 'The Avocado Toast',
      description: 'Avocado, Lemon, Olive Oil, Red Pepper Flakes, Pink Sea Salt.',
      price: '₹370',
    },
    {
      name: '# The Hummus Toast',
      description: 'Hummus, Cucumber, Feta, Chilli Flakes, Lemon Juice.',
      price: '₹290',
    },
    {
      name: 'The Loaded Avocado Toast',
      description: 'Avocado, Tomato, Cucumber, Spring Mix, Feta, Pink Salt & Dressing.',
      price: '₹390',
    },
    {
      name: '# The Peanut Butter Toast',
      description: 'Peanut Butter, Banana, Goji Berries, Hemp Seeds, Coconut & Honey.',
      price: '₹290',
    },
    {
      name: 'The Almond Butter Toast',
      description: 'Almond Butter, Banana, Hemp Seeds, Honey.',
      price: '₹340',
    },
    {
      name: 'The Nutella Toast',
      description: 'Nutella & Strawberry Spread, Sea Salt Flakes.',
      price: '₹290',
    },
  ],

  pasta: [
    {
      name: 'Alfredo Pasta',
      description: 'Cheese & Cream Sauce, Sprinkled With Parmesan Cheese.',
      price: '₹460',
    },
    {
      name: 'Arrabiata',
      description: 'Spicy Sauce Made From Garlic, Fresh Basil, Tomato & Red Chilli Pepper.',
      price: '₹380',
    },
    {
      name: 'Mix Pasta',
      description: 'Mix of Alfredo & Arrabiata sauces.',
      price: '₹400',
    },
    {
      name: 'Pesto',
      description: 'Creamy Pesto, Basil Leaves, Garlic & Pine Nuts.',
      price: '₹400',
    },
    {
      name: 'Ravioli',
      description: 'Vegetable Filling Sealed Between Two Layers Of Pasta.',
      price: '₹560',
    },
    {
      name: 'Mushroom Spaghetti Aglio Olio',
      description: 'Tossed Spaghetti, Garlic, Parsley, Garlic Olive Oil.',
      price: '₹520',
    },
    {
      name: 'Lasagne',
      description: 'Tender Sheets of Pasta, Cheesy Spinach & Veggie With Rich Tomato And Bechamel Sauce.',
      price: '₹500',
    },
    {
      name: 'Mac & Cheese Pasta',
      description: 'Macaroni Tossed in Garlic & Cheese Sauce Topped with crispy Onion & garlic crumbs.',
      price: '₹320',
    },
  ],

  sizzlers: [
    {
      name: 'Mexican Sizzler',
      description: 'Rice In Coriander With Veggies, Nachos & Combination Sauce.',
      price: '₹550',
    },
    {
      name: 'American Corn Chilly',
      description: 'American Corn & Baby Corn Tossed With Chilly, Served With Spaghetti & Creamy Cheese Sauce.',
      price: '₹500',
    },
    {
      name: 'Garlic Veg Exotica',
      description: 'Sauted Vegetable With Creamy Garlic Sauce & Garlic Rice With French Fries.',
      price: '₹550',
    },
    {
      name: 'Paneer Shashlik',
      description: 'Grilled Paneer Served Sizzling With Herbs Rice & Buttered Veggies.',
      price: '₹580',
    },
    {
      name: 'Sizzling Vegetables Sizzler',
      description: 'Vegetable & Herbs Rice Sizzling Inside Garlic Sauce.',
      price: '₹520',
    },
    {
      name: 'Lebanese Falafel Sizzler',
      description: 'Chef Special.',
      price: '₹500',
    },
  ],

  lebanese: [
    {
      name: 'Falafel Bites',
      description: 'Crispy Balls of Chickpea, Parsley, Green Onion, Garlic & Spices.',
      price: '₹180',
    },
    {
      name: 'Labanese Roll',
      description: 'Fried Roll With Spinach & Cottage Cheese Served With Dip.',
      price: '₹270',
    },
    {
      name: 'Lebanese Bowl',
      description: 'Falafel Bites, Farm Greens & Veggies, Hummus, Labneh, Muhammara & Garlic Pita Bread.',
      price: '₹440',
    },
    {
      name: 'Loaded Hummus',
      description: 'Hummus With Kalamata Olives, Parsley, Chickpeas, Black Olives, Pomegranate, Cherry Tomatoes & Feta Cheese.',
      price: '₹370',
    },
    {
      name: 'Falafel Quesadilla',
      description: 'Tortilla Filled With Bell Peppers, Kidney Beans, Cheese & Falafel.',
      price: '₹360',
    },
    {
      name: 'Pita Melts',
      description: 'Pita Bread Topped With Mushroom, Onion, Bell Pepper, Tomato, Broccoli, Olives & Mozzarella Cheese.',
      price: '₹270',
    },
    {
      name: 'Garlic Chilly Hummus',
      description: 'Hummus With Spicy Garlic Chilli Oil & Toasted Pita Chips.',
      price: '₹250',
    },
    {
      name: 'Garlic Chilly Labneh',
      description: 'Labneh With Spicy Garlic Chilly Oil And Crunchy Pita Chips.',
      price: '₹250',
    },
    {
      name: 'Stuffed Pita',
      description: 'Baked Pita Stuffed With Sundried Tomato Dip Served With Labneh.',
      price: '₹250',
    },
    {
      name: 'Roasted Garlic Parmesan Hummus',
      description: 'Chickpea & tahini hummus blended with roasted garlic and parmesan.',
      price: '₹300',
    },
  ],

  'falafel-sandwich': [
    {
      name: 'Original Falafel',
      description: 'Fresh Veggies and Greens Dressed In Tahini Sauce.',
      price: '₹250',
    },
    {
      name: 'Indian Falafel',
      description: 'Fresh Veggies, Greens & Falafel Mix In Red Spicy Sauce.',
      price: '₹300',
    },
    {
      name: 'Turkish Falafel',
      description: 'Fresh Veggies, Greens & Falafel In Spicy Traditional Muhammara.',
      price: '₹360',
    },
    {
      name: 'Arabic Falafel',
      description: 'Roasted Aubergine, Fresh Veggies, Greens & Falafel Dressed in Spicy Yogurt.',
      price: '₹250',
    },
    {
      name: 'Mexican Falafel',
      description: 'Farm Veggies, Greens & Falafel Mixed In Salsa Sauce With Nachos.',
      price: '₹250',
    },
    {
      name: 'Madrid Falafel',
      description: 'Farm Veggies, Greens & Falafel With Cheese In Hummus.',
      price: '₹300',
    },
  ],

  manakish: [
    {
      name: 'Cheese Manakish',
      description: 'Zaatar Olive Oil With Cheese.',
      price: '₹350',
    },
    {
      name: 'Mushroom Manakish',
      description: 'Cheese Manakish Topped With Sauted Mushroom.',
      price: '₹450',
    },
    {
      name: 'Lebanese Manakish',
      description: 'Cheese Manakish Topped With Zaatar Olive Oil, Italian Herbs & Roasted Eggplants.',
      price: '₹440',
    },
  ],

  'salads-meals': [
    {
      name: 'Falafel Salad',
      description: 'Falafel Bullets, Greens & Fresh Veggies, Hummus & Labneh Dressing.',
      price: '₹370',
    },
    {
      name: 'Fattoush Salad',
      description: 'Toasted Pita With Greens & Farm Veggies, Lemon Olive Oil Dressing & Sumac.',
      price: '₹330',
    },
    {
      name: 'Tabbouleh',
      description: 'Bulgur Wheat Mingled With Parsley, Tomatoes & Pomegranate, Onions, Lemon Dressing.',
      price: '₹360',
    },
    {
      name: 'Family Falafel Platter',
      description: '14 pcs Falafel Bites, 4 Pita Bread, Bowl Of Greens & Fresh Veggies, Hummus, Tahini, Labneh & Red Chilli With 2 Soft Drinks.',
      price: '₹900',
    },
    {
      name: 'Meal For Two (Mini)',
      description: '8 pcs Falafel Bites, 2 Pita Bread, Bowl Of Greens & Fresh Veggies, Hummus, Tahini, Labneh & Red Chilli With Soft Drink.',
      price: '₹700',
    },
    {
      name: 'Extra Meal Salad',
      description: 'Mix Fresh Veggies & Greens.',
      price: '₹110',
    },
  ],

  'dips-rice': [
    {
      name: 'Garlic Hummus',
      description: 'Made From Chickpea & Tahini.',
      price: '₹150',
    },
    {
      name: 'Jain Hummus',
      description: 'Made From Chickpea & Tahini.',
      price: '₹150',
    },
    {
      name: 'Spicy Hummus',
      description: 'Hummus & Spicy Garlic Chilly.',
      price: '₹200',
    },
    {
      name: 'Pesto Hummus',
      description: 'Basil Pesto Spread & Hummus.',
      price: '₹230',
    },
    {
      name: 'Beetroot Hummus',
      description: 'Roasted Beetroot Spread mixed in Hummus.',
      price: '₹220',
    },
    {
      name: 'Creamy Avocado Hummus',
      description: 'Creamy Avocado Hummus served with choice of pita bread.',
      price: '₹300',
    },
    {
      name: 'Babaganush',
      description: 'Smokey Eggplant, Tahini, Olive Oil.',
      price: '₹200',
    },
    {
      name: 'Muhammara',
      description: 'Roasted Red Peppers, Walnut, Parsley & Olive Oil.',
      price: '₹330',
    },
    {
      name: 'Labneh',
      description: 'Greek Yogurt, Garlic, Sumac.',
      price: '₹170',
    },
    {
      name: 'Garlic Rice',
      description: 'Steamed Rice With Garlic Pepper & Creamy Garlic Sauce.',
      price: '₹340',
    },
    {
      name: 'Cilantro Rice',
      description: 'Steamed Rice & Coriander, Bell Pepper With Combination Sauce.',
      price: '₹390',
    },
    {
      name: 'Mexican Rice',
      description: 'Rice Mixed In Beans, Sweet Corn, Spring Onion With Sparkling Of Italian Herbs.',
      price: '₹330',
    },
    {
      name: 'Lebanese Rice',
      description: 'Steamed Rice Cooked In Spinach & Pepper Sauce.',
      price: '₹390',
    },
  ],
};
