import logo from "./logo.png";
import headerImg from "./headerImg.jpg"
import menu_1 from "./menu_1.jpg"
import food_1 from "./menu_1.jpg"

export const assets = {
  logo,
  headerImg
};

export const menu_list = [
  {
    menu_name: "Salad",
    menu_image: menu_1,
  },
  {
    menu_name: "Rolls",
    menu_image: menu_1,
  },
  {
    menu_name: "Desserts",
    menu_image: menu_1,
  },
  {
    menu_name: "Sandwich",
    menu_image: menu_1,
  },
  {
    menu_name: "Pizza",
    menu_image: menu_1,
  },
  {
    menu_name: "Pasta",
    menu_image: menu_1,
  },
  {
    menu_name: "Burger",
    menu_image: menu_1,
  },
  {
    menu_name: "Fries",
    menu_image: menu_1,
  }
];

export const food_list = [
  // Salad category
  {
    _id: "1",
    name: "Greek Salad",
    image: food_1,
    price: 12,
    description: "A healthy mix of fresh vegetables and feta cheese.",
    category: "Salad",
  },
  {
    _id: "2",
    name: "Caesar Salad",
    image: food_1,
    price: 15,
    description: "Classic Caesar salad with romaine lettuce and croutons.",
    category: "Salad",
  },
  {
    _id: "3",
    name: "Veggie Salad",
    image: food_1,
    price: 10,
    description: "A mix of garden-fresh vegetables and olive oil dressing.",
    category: "Salad",
  },
  {
    _id: "4",
    name: "Fruit Salad",
    image: food_1,
    price: 14,
    description: "A delicious assortment of seasonal fruits.",
    category: "Salad",
  },
  {
    _id: "5",
    name: "Chicken Salad",
    image: food_1,
    price: 18,
    description: "Grilled chicken over a bed of mixed greens.",
    category: "Salad",
  },

  // Rolls category
  {
    _id: "6",
    name: "Spring Rolls",
    image: food_1,
    price: 8,
    description: "Crispy rolls filled with vegetables and served with dipping sauce.",
    category: "Rolls",
  },
  {
    _id: "7",
    name: "Chicken Rolls",
    image: food_1,
    price: 12,
    description: "Spicy chicken wrapped in soft rolls.",
    category: "Rolls",
  },
  {
    _id: "8",
    name: "Paneer Rolls",
    image: food_1,
    price: 10,
    description: "Indian-style paneer wrapped in flatbread.",
    category: "Rolls",
  },
  {
    _id: "9",
    name: "Veggie Rolls",
    image: food_1,
    price: 9,
    description: "A light, healthy roll filled with fresh vegetables.",
    category: "Rolls",
  },
  {
    _id: "10",
    name: "Egg Rolls",
    image: food_1,
    price: 11,
    description: "Classic egg rolls with a crispy outer layer.",
    category: "Rolls",
  },

  // Desserts category
  {
    _id: "11",
    name: "Chocolate Cake",
    image: food_1,
    price: 6,
    description: "Rich and moist chocolate cake with a creamy filling.",
    category: "Desserts",
  },
  {
    _id: "12",
    name: "Ice Cream Sundae",
    image: food_1,
    price: 7,
    description: "A sundae topped with whipped cream and cherries.",
    category: "Desserts",
  },
  {
    _id: "13",
    name: "Apple Pie",
    image: food_1,
    price: 9,
    description: "A sweet, flaky pie filled with fresh apples.",
    category: "Desserts",
  },
  {
    _id: "14",
    name: "Brownies",
    image: food_1,
    price: 5,
    description: "Fudgy chocolate brownies with a crunchy top.",
    category: "Desserts",
  },
  {
    _id: "15",
    name: "Cheesecake",
    image: food_1,
    price: 12,
    description: "Creamy cheesecake with a graham cracker crust.",
    category: "Desserts",
  },

  // Sandwich category
  {
    _id: "16",
    name: "Club Sandwich",
    image: food_1,
    price: 14,
    description: "A classic club sandwich with turkey, bacon, and lettuce.",
    category: "Sandwich",
  },
  {
    _id: "17",
    name: "BLT Sandwich",
    image: food_1,
    price: 13,
    description: "Bacon, lettuce, and tomato on toasted bread.",
    category: "Sandwich",
  },
  {
    _id: "18",
    name: "Grilled Cheese",
    image: food_1,
    price: 8,
    description: "A cheesy grilled sandwich with golden-brown bread.",
    category: "Sandwich",
  },
  {
    _id: "19",
    name: "Chicken Sandwich",
    image: food_1,
    price: 16,
    description: "Grilled chicken breast in a toasted bun.",
    category: "Sandwich",
  },
  {
    _id: "20",
    name: "Tuna Sandwich",
    image: food_1,
    price: 15,
    description: "Fresh tuna salad served between soft bread.",
    category: "Sandwich",
  },

  // Pizza category
  {
    _id: "21",
    name: "Margherita Pizza",
    image: food_1,
    price: 18,
    description: "Classic pizza with tomato, mozzarella, and basil.",
    category: "Pizza",
  },
  {
    _id: "22",
    name: "Pepperoni Pizza",
    image: food_1,
    price: 20,
    description: "Topped with pepperoni slices and cheese.",
    category: "Pizza",
  },
  {
    _id: "23",
    name: "BBQ Chicken Pizza",
    image: food_1,
    price: 22,
    description: "Pizza topped with BBQ sauce and grilled chicken.",
    category: "Pizza",
  },
  {
    _id: "24",
    name: "Veggie Pizza",
    image: food_1,
    price: 17,
    description: "A healthy pizza topped with fresh vegetables.",
    category: "Pizza",
  },
  {
    _id: "25",
    name: "Hawaiian Pizza",
    image: food_1,
    price: 21,
    description: "Topped with ham and pineapple for a sweet and savory mix.",
    category: "Pizza",
  },

  // Pasta category
  {
    _id: "26",
    name: "Spaghetti Bolognese",
    image: food_1,
    price: 16,
    description: "Spaghetti topped with a rich meat sauce.",
    category: "Pasta",
  },
  {
    _id: "27",
    name: "Fettuccine Alfredo",
    image: food_1,
    price: 18,
    description: "Creamy Alfredo sauce over fettuccine pasta.",
    category: "Pasta",
  },
  {
    _id: "28",
    name: "Penne Arrabbiata",
    image: food_1,
    price: 15,
    description: "Spicy tomato sauce over penne pasta.",
    category: "Pasta",
  },
  {
    _id: "29",
    name: "Macaroni and Cheese",
    image: food_1,
    price: 14,
    description: "Cheesy macaroni pasta baked to perfection.",
    category: "Pasta",
  },
  {
    _id: "30",
    name: "Lasagna",
    image: food_1,
    price: 19,
    description: "Layered pasta with meat sauce and cheese.",
    category: "Pasta",
  },

  // Burger category
  {
    _id: "31",
    name: "Cheeseburger",
    image: food_1,
    price: 12,
    description: "Juicy beef patty topped with melted cheese.",
    category: "Burger",
  },
  {
    _id: "32",
    name: "Veggie Burger",
    image: food_1,
    price: 10,
    description: "A plant-based patty served in a toasted bun.",
    category: "Burger",
  },
  {
    _id: "33",
    name: "Chicken Burger",
    image: food_1,
    price: 14,
    description: "Grilled chicken breast served in a soft bun.",
    category: "Burger",
  },
  {
    _id: "34",
    name: "Bacon Burger",
    image: food_1,
    price: 16,
    description: "A bacon-topped burger with crispy fries on the side.",
    category: "Burger",
  },
  {
    _id: "35",
    name: "Mushroom Swiss Burger",
    image: food_1,
    price: 17,
    description: "Beef patty topped with sautéed mushrooms and Swiss cheese.",
    category: "Burger",
  },

  // Fries category
  {
    _id: "36",
    name: "Classic Fries",
    image: food_1,
    price: 6,
    description: "Golden and crispy french fries.",
    category: "Fries",
  },
  {
    _id: "37",
    name: "Curly Fries",
    image: food_1,
    price: 7,
    description: "Seasoned curly fries, crispy and delicious.",
    category: "Fries",
  },
  {
    _id: "38",
    name: "Sweet Potato Fries",
    image: food_1,
    price: 8,
    description: "Sweet potato fries, baked to perfection.",
    category: "Fries",
  },
  {
    _id: "39",
    name: "Loaded Fries",
    image: food_1,
    price: 10,
    description: "Fries topped with cheese, bacon, and sour cream.",
    category: "Fries",
  },
  {
    _id: "40",
    name: "Truffle Fries",
    image: food_1,
    price: 12,
    description: "Fries drizzled with truffle oil and Parmesan cheese.",
    category: "Fries",
  },
];
