const app = Vue.createApp({
    data() {
        return {
            products: [
                { name: 'Our Blend', price: 19.99, image: 'images/our_blend.png', description: 'A smooth and balanced blend of rich flavors, perfect for any time of day.' },
                { name: 'Brazil Blend', price: 21.99, image: 'images/brazil_blend.png', description: 'A mild and nutty blend from Brazil, with hints of chocolate and caramel.' },
                { name: 'Vietnam Blend', price: 12.99, image: 'images/vietnam_blend.png', description: 'Strong and bold, with earthy undertones and a smooth finish, ideal for those who enjoy a strong brew.' },
                { name: 'Colombia Blend', price: 15.99, image: 'images/colombia_blend.png', description: 'A well-rounded coffee with bright acidity and floral notes, a classic Colombian taste.' },
                { name: 'Indonesia Blend', price: 16.99, image: 'images/indonesia_blend.png', description: 'Rich and full-bodied with a deep, earthy flavor, typical of Indonesian coffees.' },
                { name: 'Ethiopia Blend', price: 17.99, image: 'images/ethiopia_blend.png', description: 'A fruity and aromatic coffee with a distinct floral profile, grown in the highlands of Ethiopia.' },
                { name: 'Decaf Blend', price: 14.99, image: 'images/decaf.png', description: 'A smooth decaffeinated blend with the full flavor of traditional coffee, perfect for any time of day.' },
                { name: 'Kona Beans', price: 24.99, image: 'images/kona.png', description: 'Grown on the volcanic slopes of Hawaii, Kona beans offer a smooth, rich flavor with a hint of nuttiness.' },
                { name: 'Sumatra Beans', price: 19.99, image: 'images/sumatra.png', description: 'Bold and full-bodied, with earthy and spicy notes, a signature of Sumatra’s coffee beans.' },
                { name: 'Strong Blend', price: 16.99, image: 'images/strong_blend.png', description: 'For those who love a strong, robust cup, with a deep, intense flavor and rich aroma.' },
                { name: 'Light Blend', price: 15.99, image: 'images/light_blend.png', description: 'A light and bright blend with subtle fruity notes, ideal for a refreshing and smooth coffee experience.' },
                { name: 'Tarrazu Beans', price: 18.99, image: 'images/tarrazu.png', description: 'From the Tarrazu region in Costa Rica, these beans offer a smooth cup with a balance of acidity and sweetness.' }
            ]
        };
    },
    methods: {
        buyProduct(product) {
            console.log(`Buying: ${product.name}`);
        }
    }
});
app.mount('#coffeeApp')