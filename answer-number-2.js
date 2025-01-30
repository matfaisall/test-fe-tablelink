const footballPlayers = [
  {
    name: "Lionel Messi",
    age: 34,
  },
  {
    name: "Cristiano Ronaldo",
    age: 36,
  },
  {
    name: "Neymar Jr",
    age: 29,
  },
  {
    name: "Robert Lewandowski",
    age: 33,
  },
];

const minAge = footballPlayers.reduce((acc, curr) => {
  return acc.age < curr.age ? acc : curr;
});

const maxAge = footballPlayers.reduce((acc, curr) => {
  return acc.age > curr.age ? acc : curr;
});

const sortByMinAge = footballPlayers.sort((a, b) => a.age - b.age);

const sortByMaxAge = footballPlayers.sort((a, b) => b.age - a.age);

console.log("Min Age", minAge);
console.log("Max Age", maxAge);
console.log("Sort By Min Age", sortByMinAge);
console.log("Sort By Max Age", sortByMaxAge);
