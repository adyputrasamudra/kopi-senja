 document.addEventListener('alpine:init', () => {
        Alpine.data('products', () => ({
            itmes: [
                { id: 1, name: 'Cru Cafe', img: '2.jpg', price: 250000},
                { id: 2, name: 'Coffe Beans Tanamera', img: '1.jpg', price: 868000},
                { id: 3, name: 'Healthy Coffe', img: '3.jpg', price: 120000},
                { id: 4, name: 'Koro Kopi Susu', img: '4.jpg', price: 180000},
                { id: 5, name: 'Excelso Coffe', img: '5.jpg', price: 65000},
                { id: 6, name: 'Nescafe', img: '6.jpg', price: 80000},
                
            ],
        }));
 });