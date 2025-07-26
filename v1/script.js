const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://xebnvvxgpbecmjkxjzal.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlYm52dnhncGJlY21qa3hqemFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5OTE5NDQsImV4cCI6MjA2ODU2Nzk0NH0.DFlGvOQXP_Ls-xND_0LaLJ0ptaBLF7QKLh0tueR-IRk",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlYm52dnhncGJlY21qa3hqemFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5OTE5NDQsImV4cCI6MjA2ODU2Nzk0NH0.DFlGvOQXP_Ls-xND_0LaLJ0ptaBLF7QKLh0tueR-IRk",
      },
    }
  );
  const data = await res.json();
  // console.log(data);
  // const filteredData = data.filter((fact) => fact.category === "society");
  createFactsList(data);
}

function createFactsList(dataArray) {
  // factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");

  const htmlArr = dataArray.map(
    (fact) => `<li class = "fact">
    <p>
    ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
      >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>
  </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
console.log([7, 64, 6, -23, 11].find((el) => el > 10));

/* 
let votesMindblowing = 5;
let votesInteresting = 23;
votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log("Upvotes:", totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log("Is the fact correct?", isCorrect);

console.log(parseInt("24.533cc"));
*/

/*
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  //2022 - 2015;
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible year!. Year needs to be less or equal to ${currentYear}.`;
}

const age1 = calcFactAge(2015);
console.log(age1);

console.log(calcFactAge(2021));
console.log(calcFactAge(1990));
console.log(calcFactAge(2037));

// const calcFactAge2 = (year) => 2025 - year;
const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year!. Year needs to be less or equal to ${new Date().getFullYear()}.`;

console.log(calcFactAge2(2015));
console.log(calcFactAge2(2037));
*/

/* 
let votesMindblowing = 20;
let votesInteresting = 5;

if (votesMindblowing === votesInteresting) {
  alert("This fact is equally mindblowing and interesting!");
} else if (votesInteresting > votesMindblowing) {
  console.log("Interesting fact!");
} else if (votesMindblowing > votesInteresting) {
  console.log("Mindblowing fact!");
}

//falsy values: 0, '', null, undefined
if (votesMindblowing) {
  console.log("MINDBLOWING FACT!!!");
} else {
  console.log("Not So special");
}

let votesFalse = 7;
const totalUpvotes = votesMindblowing + votesInteresting;

const message =
  totalUpvotes > votesFalse ? "This fact is correct!" : "This fact is false!";
//alert(message);
console.log(message);

const text = "Lisbon is the capital of Portugal";
const upperText = text.toUpperCase(); //method
console.log(upperText);

const str = `The current fact is: "${text}". It is ${calcFactAge(
  2015
)} years old. It is probably ${
  totalUpvotes > votesFalse ? "correct" : "false"
}!`; //template literal
console.log(str); 
*/

// const fact = ["Lisbon is the capital of Portugal", 2015, true];
// console.log(fact[2]);
// console.log(fact.length);
// console.log(fact[fact.length - 1]);

// const [text, createdIn] = fact;
// const newFact = [...fact, "society"];
// console.log(newFact);

// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });

// const times10 = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });
// const times10 = [2, 4, 6, 8].map((el) => el * 10);
// console.log(times10);

// const CATEGORIES = [
//   { name: "technology", color: "#3b82f6" },
//   { name: "science", color: "#16a34a" },
//   { name: "finance", color: "#ef4444" },
//   { name: "society", color: "#eab308" },
//   { name: "entertainment", color: "#db2777" },
//   { name: "health", color: "#14b8a6" },
//   { name: "history", color: "#f97316" },
//   { name: "news", color: "#8b5cf6" },
// ];

// const allcategories = CATEGORIES.map((el) => el.name);
// console.log(allcategories);

// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];

// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear();
//   //2022 - 2015;
//   const age = currentYear - year;

//   if (age >= 0) return age;
//   else
//     return `Impossible year!. Year needs to be less or equal to ${currentYear}.`;
// }

// const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
// console.log(factAges);
// console.log(factAges.join(" - "));
/*
const factObj = {
  text: "Lisbon is the capital of Portugal",
  category: "society",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `The fact "${
      this.text
    }" is from the category ${this.category.toUpperCase()}`;
  },
};

console.log(factObj.text); //usual case
console.log(factObj["text"]);

const { category, isCorrect } = factObj;
console.log(category);
console.log(factObj.createSummary());
*/
// revise 44th video
