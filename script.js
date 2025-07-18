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

//Snack 4 - Calcola l’età media
const ages = authors.map(author => author.age);
const agesSum = ages.reduce((acc, age) => acc + age, 0);
const averageAge = (agesSum / ages.length).toFixed(1);

console.log(`Età media autori: ${averageAge} anni`);

//Snack 5 (Bonus) - Raccogli i libri da API locale
async function getBooks(ids) {
    const baseUrl = 'http://localhost:3333/books';

    const requests = ids.map(id =>
        fetch(`${baseUrl}/${id}`)
            .then(res => res.ok ? res.json() : null)
            .catch(() => null)
    );

    const results = await Promise.all(requests);
    return results.filter(book => book !== null);
}

getBooks([2, 13, 7, 21, 19]).then(fetchedBooks => {
    console.log("Libri ricevuti da API:", fetchedBooks);
});

//Snack 6 (Bonus) - Ordina i libri
const areThereAvailableBooks = books.some(book => book.available);
console.log("Ci sono libri disponibili:", areThereAvailableBooks);

// Ordine crescente
const booksByPrice = [...books].sort((a, b) => {
    const priceA = parseFloat(a.price.replace('€', ''));
    const priceB = parseFloat(b.price.replace('€', ''));
    return priceA - priceB;
});

// Ordina booksByPrice per disponibilità (true prima)
booksByPrice.sort((a, b) => b.available - a.available);

console.log("Libri ordinati per disponibilità e prezzo:", booksByPrice);

//Snack 7 (Bonus) - Analizza i tag
const tagCounts = books.reduce((acc, book) => {
    book.tags.forEach(tag => {
        acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
}, {});

console.log("Conteggio tag:", tagCounts);