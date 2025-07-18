const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: { name: 'Alice', age: 35 },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: { name: 'Bob', age: 20 },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: { name: 'Alice', age: 17 },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: { name: 'Charlie', age: 50 },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

//Snack 1 - Filtra e Modifica

//Non ho capito cosa intendete nella traccia per "Crea una funzione che somma due numeri".
//In ogni caso l'ho messo commentato e sotto il resto della traccia.
//function sum(a, b) {
//  return a + b;}

const longBooks = books.filter(book => book.pages > 300);
const longBooksTitles = longBooks.map(book => book.title);
console.log("Long books titles:");
longBooksTitles.forEach(title => console.log(" -", title));

//Snack 2 - Il primo libro scontato
const availableBooks = books.filter(book => book.available);

const discountedBooks = availableBooks.map(book => {
    const price = parseFloat(book.price.replace('€', ''));
    const discounted = (price * 0.8).toFixed(2);
    return {
        ...book,
        price: `${discounted}€`
    };
});

const fullPricedBook = discountedBooks.find(book => {
    const number = parseFloat(book.price);
    return number % 1 === 0;
});

console.log("Libro con prezzo intero dopo sconto:", fullPricedBook);

//Snack 3 - Ordinare gli Autori
const authors = books.map(book => book.author);

const areAuthorsAdults = authors.every(author => author.age >= 18);

authors.sort((a, b) => {
    return areAuthorsAdults
        ? a.age - b.age   // crescente
        : b.age - a.age;  // decrescente
});

console.log("Autori ordinati:", authors);