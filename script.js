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
console.log("📚 Long books titles:");
longBooksTitles.forEach(title => console.log(" -", title));