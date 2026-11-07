// Edit this file to change the kitchen's name, contact details and menu.

export const KITCHEN = {
  name: 'Siva Guru',
  subname: 'Father Kitchen',
  tamilName: 'சிவ குரு அப்பா சமையல்',
  tagline: 'Cooked the way Appa cooked at home. Hot meals, morning tiffin and parcels, made fresh every day.',
  // WhatsApp number in international format, digits only (e.g. 919876543210)
  whatsapp: '910000000000',
  phoneDisplay: '+91 00000 00000',
  address: 'Main Road, Veppampattu, Thiruvallur District, Tamil Nadu',
  mapsUrl: 'https://maps.google.com/?q=Veppampattu+Thiruvallur',
  hours: [
    { label: 'Morning tiffin', time: '6:30 – 10:30 am' },
    { label: 'Meals', time: '12:00 – 3:30 pm' },
    { label: 'Evening tiffin', time: '6:00 – 10:00 pm' },
  ],
};

export type Category = 'Tiffin' | 'Meals' | 'Biryani & rice' | 'Sides' | 'Sweets & drinks';

export interface Dish {
  id: string;
  name: string;
  tamil: string;
  description: string;
  price: number;
  category: Category;
  veg: boolean;
  special?: boolean;
}

export const CATEGORIES: Category[] = ['Tiffin', 'Meals', 'Biryani & rice', 'Sides', 'Sweets & drinks'];

export const MENU: Dish[] = [
  { id: 'idli', name: 'Idli (2 pcs)', tamil: 'இட்லி', description: 'Soft rice idli with coconut chutney and sambar.', price: 30, category: 'Tiffin', veg: true },
  { id: 'dosa', name: 'Plain dosa', tamil: 'தோசை', description: 'Thin, crisp dosa on a cast-iron tawa.', price: 40, category: 'Tiffin', veg: true },
  { id: 'masala-dosa', name: 'Masala dosa', tamil: 'மசாலா தோசை', description: 'Crisp dosa filled with potato masala.', price: 60, category: 'Tiffin', veg: true, special: true },
  { id: 'pongal', name: 'Ven pongal', tamil: 'பொங்கல்', description: 'Rice and moong dal with pepper, cumin and ghee.', price: 50, category: 'Tiffin', veg: true },
  { id: 'poori', name: 'Poori masala', tamil: 'பூரி', description: 'Two puffed pooris with potato masala.', price: 50, category: 'Tiffin', veg: true },
  { id: 'parotta', name: 'Parotta (2 pcs)', tamil: 'பரோட்டா', description: 'Layered parotta with salna.', price: 40, category: 'Tiffin', veg: false },

  { id: 'veg-meals', name: 'Veg meals', tamil: 'சாப்பாடு', description: 'Rice, sambar, rasam, kootu, poriyal, appalam, curd and pickle on a banana leaf.', price: 100, category: 'Meals', veg: true, special: true },
  { id: 'chicken-meals', name: 'Chicken meals', tamil: 'சிக்கன் சாப்பாடு', description: 'Veg meals with chicken kuzhambu and a piece of chicken fry.', price: 150, category: 'Meals', veg: false },
  { id: 'fish-meals', name: 'Fish meals', tamil: 'மீன் சாப்பாடு', description: 'Veg meals with tangy fish kuzhambu and fish fry.', price: 170, category: 'Meals', veg: false },
  { id: 'mini-meals', name: 'Mini meals', tamil: 'மினி சாப்பாடு', description: 'Smaller plate: rice, sambar, poriyal and curd.', price: 70, category: 'Meals', veg: true },

  { id: 'chicken-biryani', name: 'Chicken biryani', tamil: 'சிக்கன் பிரியாணி', description: 'Seeraga samba rice dum biryani with onion raita.', price: 180, category: 'Biryani & rice', veg: false, special: true },
  { id: 'mutton-biryani', name: 'Mutton biryani', tamil: 'மட்டன் பிரியாணி', description: 'Slow-cooked mutton, seeraga samba rice, brinjal curry.', price: 260, category: 'Biryani & rice', veg: false },
  { id: 'veg-biryani', name: 'Veg biryani', tamil: 'வெஜ் பிரியாணி', description: 'Seasonal vegetables and seeraga samba rice.', price: 120, category: 'Biryani & rice', veg: true },
  { id: 'curd-rice', name: 'Curd rice', tamil: 'தயிர் சாதம்', description: 'Tempered curd rice with pomegranate and pickle.', price: 60, category: 'Biryani & rice', veg: true },
  { id: 'lemon-rice', name: 'Lemon rice', tamil: 'எலுமிச்சை சாதம்', description: 'Lemon rice with peanuts and curry leaves.', price: 60, category: 'Biryani & rice', veg: true },

  { id: 'chicken-65', name: 'Chicken 65', tamil: 'சிக்கன் 65', description: 'Crisp, spicy fried chicken.', price: 140, category: 'Sides', veg: false },
  { id: 'pepper-chicken', name: 'Pepper chicken', tamil: 'மிளகு சிக்கன்', description: 'Dry chicken roast with crushed black pepper.', price: 160, category: 'Sides', veg: false },
  { id: 'egg-omelette', name: 'Omelette', tamil: 'ஆம்லெட்', description: 'Two eggs with onion and green chilli.', price: 30, category: 'Sides', veg: false },
  { id: 'medu-vada', name: 'Medu vada (2 pcs)', tamil: 'உளுந்து வடை', description: 'Crisp urad dal vada.', price: 30, category: 'Sides', veg: true },

  { id: 'kesari', name: 'Rava kesari', tamil: 'கேசரி', description: 'Semolina sweet with ghee and cashew.', price: 40, category: 'Sweets & drinks', veg: true },
  { id: 'payasam', name: 'Paal payasam', tamil: 'பாயசம்', description: 'Rice and milk kheer, cooked slow.', price: 50, category: 'Sweets & drinks', veg: true },
  { id: 'filter-coffee', name: 'Filter coffee', tamil: 'பில்டர் காபி', description: 'Strong decoction, frothed in a dabarah.', price: 25, category: 'Sweets & drinks', veg: true, special: true },
  { id: 'tea', name: 'Tea', tamil: 'டீ', description: 'Milk tea with ginger.', price: 15, category: 'Sweets & drinks', veg: true },
];
