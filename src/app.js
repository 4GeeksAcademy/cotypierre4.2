/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = () => {
//   //write your code here

//   document.querySelector("#btn").addEventListener("click", () => {
//     document.querySelector("#the-excuse").innerHTML = generateExcuse();
//   });
//   console.log("Hello");
// };

// let generateExcuse = () => {
//   let who = ["The dog", "My grandma", "His turtle", "My bird"];
//   let action = ["ate", "peed", "crushed", "broke"];
//   let what = ["my homework", "the keys", "the car"];
//   let when = [
//     "before the class",
//     "right on time",
//     "when I finished",
//     "during my lunch",
//     "while I was praying"
//   ];

//   let whoIndex = Math.floor(Math.random() * who.length);
//   let actionIndex = Math.floor(Math.random() * action.length);
//   let whatIndex = Math.floor(Math.random() * what.length);
//   let whenIndex = Math.floor(Math.random() * when.length);

//   return (
//     who[whoIndex] +
//     " " +
//     action[actionIndex] +
//     " " +
//     what[whatIndex] +
//     " " +
//     when[whenIndex]
//   );
// };

//Codigo mejorado

const excuses = [
  "The dog ate my homework before the class.",
  "My grandma peed my homework right on time.",
  "His turtle crushed my homework when I finished.",
  "My bird broke my homework during my lunch.",
  "I was praying when the dog ate my homework."
];

function generateExcuse() {
  return excuses[Math.floor(Math.random() * excuses.length)];
}

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};
