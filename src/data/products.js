import p1 from '../assets/products/oud-wood.jpg';
import p2 from '../assets/products/rose-velvet.jpg';
import p3 from '../assets/products/oceanic.jpg';
import p4 from '../assets/products/summer-breeze.jpg';
import p5 from '../assets/products/pocket-rose.jpg';
import p6 from '../assets/products/midnight-musk.jpg';
import p7 from '../assets/products/ghazal-world.jpg';
import p8 from '../assets/products/vanilla-sky.jpg';
import p9 from '../assets/products/executive.jpg';
import p10 from '../assets/products/classic-men.jpg';
import p11 from '../assets/products/lavender.jpg';
import p12 from '../assets/products/golden-sand.jpg';
import p13 from '../assets/products/floral-bloom.jpg';
import p14 from '../assets/products/urban-sport.jpg';
import p15 from '../assets/products/saffron-gold.jpg';
import p16 from '../assets/products/cool-aqua.jpg';
import p17 from '../assets/products/berry-blit.jpg';
import p18 from '../assets/products/earth-pulse.jpg';
import p19 from '../assets/products/leather-legend.jpg';
import p20 from '../assets/products/jasmine-glow.jpg';
import p21 from '../assets/products/crarua-perfum.jpg';

export const products = [
    {
        id: 1,
        name: "Oud Wood Elite",
        category: "long-lasting-impressions",
        gender: "men",
        price: 2499,
        size: "50ml",
        image: p1,
        isBestSeller: true,
        notes: { top: "Cardamom", heart: "Oud Wood", base: "Amber" },
        description: "A rare and distinctive fragrance that combines smoky oud with exotic spices."
    },
    {
        id: 2, name: "Rose Velvet", category: "body-mists", gender: "women", price: 1299, size: "100ml", image: p2, isBestSeller: false,
        notes: { top: "Bergamot", heart: "Damask Rose", base: "White Musk" }, description: "A delicate floral embrace that feels like walking through a dewy rose garden."
    },
    {
        id: 3, name: "Oceanic Mist", category: "daily-essentials", gender: "unisex", price: 1899, size: "50ml", image: p3, isBestSeller: true,
        notes: { top: "Sea Salt", heart: "Sage", base: "Driftwood" }, description: "Fresh, crisp, and spirited—capturing the essence of the rugged coastline."
    },

    {
        id: 4, name: "Summer Breeze", category: "daily-essentials", gender: "unisex", price: 1599, size: "50ml", image: p4,
        notes: { top: "Lemon", heart: "Jasmine", base: "White Amber" }, description: "A vibrant burst of citrus."
    },
    {
        id: 5, name: "Pocket Rose", category: "pocket-luxuries", gender: "women", price: 499, size: "20ml", image: p5,
        notes: { top: "Pink Pepper", heart: "Rose Essence", base: "Vanilla" }, description: "Travel-friendly."
    },
    {
        id: 6, name: "Midnight Musk", category: "long-lasting-impressions", gender: "unisex", price: 3200, size: "100ml", image: p6,
        notes: { top: "Blackberry", heart: "Fresh Musk", base: "Patchouli" }, description: "Perfect for evening."
    },
    {
        id: 7, name: "Citrus Punch", category: "body-mists", gender: "men", price: 899, size: "150ml", image: p7,
        notes: { top: "Lime", heart: "Green Tea", base: "Vetiver" }, description: "Energizing mist."
    },
    {
        id: 8, name: "Vanilla Sky", category: "daily-essentials", gender: "women", price: 2100, size: "50ml", image: p8,
        notes: { top: "Pear", heart: "Vanilla Bean", base: "Caramel" }, description: "Sweet and creamy."
    },
    {
        id: 9, name: "The Executive", category: "long-lasting-impressions", gender: "men", price: 4500, size: "100ml", image: p9,
        notes: { top: "Pineapple", heart: "Birch", base: "Oakmoss" }, description: "Boardroom power scent."
    },
    {
        id: 10, name: "Classic Men Oud", category: "long-lasting-impressions", gender: "men", price: 3500, size: "100ml", image: p10,
        notes: { top: "Tobacco", heart: "Leather", base: "Dark Oud" }, description: "Modern gentleman."
    },
    {
        id: 11, name: "Lavender Dreams", category: "body-mists", gender: "unisex", price: 750, size: "200ml", image: p11,
        notes: { top: "Lavender", heart: "Chamomile", base: "Sandalwood" }, description: "Calming and serene."
    },
    {
        id: 12, name: "Golden Sand", category: "pocket-luxuries", gender: "unisex", price: 599, size: "15ml", image: p12,
        notes: { top: "Orange", heart: "Saffron", base: "Vanilla Musk" }, description: "Luxurious oil."
    },

    {
        id: 13, name: "Floral Bloom", category: "daily-essentials", gender: "women", price: 1750, size: "50ml", image: p13,
        notes: { top: "Peony", heart: "Tuberose", base: "Sandalwood" }, description: "Beautiful white flowers."
    },
    {
        id: 14, name: "Urban Sport", category: "daily-essentials", gender: "men", price: 1400, size: "100ml", image: p14,
        notes: { top: "Grapefruit", heart: "Ginger", base: "Cedar" }, description: "Energy for the move."
    },
    {
        id: 15, name: "Saffron Gold", category: "long-lasting-impressions", gender: "unisex", price: 5500, size: "100ml", image: p15,
        notes: { top: "Saffron", heart: "Rose", base: "Amberwood" }, description: "Pure luxury."
    },
    {
        id: 16, name: "Cool Aqua", category: "body-mists", gender: "men", price: 999, size: "150ml", image: p16,
        notes: { top: "Mint", heart: "Coriander", base: "Tobacco" }, description: "Aquatic refresh."
    },
    {
        id: 17, name: "Berry Blit", category: "pocket-luxuries", gender: "women", price: 450, size: "10ml", image: p17,
        notes: { top: "Strawberry", heart: "Raspberry", base: "Praline" }, description: "Fruity roll-on."
    },
    {
        id: 18, name: "Earth Pulse", category: "daily-essentials", gender: "unisex", price: 1950, size: "50ml", image: p18,
        notes: { top: "Petrichor", heart: "Woody Notes", base: "Moss" }, description: "Smell of rain."
    },
    {
        id: 19, name: "Leather Legend", category: "long-lasting-impressions", gender: "men", price: 3800, size: "100ml", image: p19,
        notes: { top: "Raspberry", heart: "Leather", base: "Suede" }, description: "Rugged sophistication."
    },
    {
        id: 20, name: "Jasmine Glow", category: "body-mists", gender: "women", price: 1100, size: "200ml", image: p20,
        notes: { top: "Jasmine", heart: "Honey", base: "Light Musk" }, description: "Floral trail."
    },
    {
        id: 21,name: "Crarua Luxury", category: "long-lasting-impressions", gender: "unisex", price: 4200, size: "100ml", image: p21, isBestSeller: true,
        notes: { top: "Saffron, Jasmine", heart: "Amberwood, Ambergris", base: "Fir Resin, Cedar" }, description: "A sophisticated blend that leaves a powerful and royal trail."
    }
];