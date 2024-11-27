const app = Vue.createApp({
    data() {
        return {
            products: [
                { name: 'Coffee A', price: 12.99, image: 'images/GroundCoffee.jpeg', description: 'Great coffee A.' },
                { name: 'Coffee B', price: 15.49, image: 'images/GroundCoffee.jpeg', description: 'Great coffee B.' }
            ]
        };
    },
    methods: {
        buyProduct(product) {
            console.log(`Buying: ${product.name}`);
        }
    }
});
app.mount('#coffeeSell');