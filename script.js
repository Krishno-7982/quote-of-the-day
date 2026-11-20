const quote_msg = document.getElementById("quote_msg");
const date = document.getElementById("current_date");
const random_quote = document.getElementById("newQuoteBtn");

const quotes = [
    "First, solve the problem. Then, write the code.",
    "Eat, sleep, code, repeat.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "Every expert was once a beginner.",
    "Code is like humor. When you have to explain it, it's bad.",
    "Don't worry if it doesn't work right. If everything did, you'd be out of a job.",
    "The best error message is the one that never shows up.",
    "Debugging is twice as hard as writing the code in the first place.",
    "Great developers are not born; they are built through practice.",
    "A journey of a thousand bugs begins with a single line of code.",
    "Your future is created by what you debug today.",
    "Keep calm and trust your logic.",
    "Behind every successful programmer is a thousand failed attempts.",
    "DSA is not difficult; consistency is difficult.",
    "Think twice, code once.",
    "Don't just learn to code. Learn to think.",
    "The computer was born to solve problems that did not exist before.",
    "Every bug is an opportunity to understand something better.",
    "Programming is the art of telling another human what one wants the computer to do.",
    "Dream in algorithms, build in code.",
    "A good programmer looks both ways before crossing a one-way street.",
    "Your code doesn't have to be perfect; it has to keep improving.",
    "One more problem solved is one step closer to your dream.",
    "Great things take time, just like compiling a complex project.",
    "Don't compare your chapter one to someone else's chapter twenty.",
    "Code today, innovate tomorrow.",
    "The struggle you're facing today will become your strength tomorrow.",
    "Behind every clean code is a messy journey of debugging.",
    "Consistency beats talent when talent doesn't work hard.",
    "Never stop learning because technology never stops evolving."
];

function display_daily_quote() {
    const today = new Date();

    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;

    const dayOfYear = Math.floor(diff / oneDay);

    const index = (dayOfYear - 1) % quotes.length;

    quote_msg.textContent = quotes[index];

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    date.textContent = today.toLocaleDateString("en-IN", options);
}

display_daily_quote();

random_quote.addEventListener("click", () => {
    const index = Math.floor(Math.random() * quotes.length);
    quote_msg.textContent = quotes[index];

});