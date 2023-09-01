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

window.onload = () => {
  const btn = document.createElement("button");
  btn.textContent = "Generate Excuse";
  btn.addEventListener("click", () => {
    const excuse = generateExcuse();

    document.querySelector("#the-excuse").innerHTML = excuse;
  });

  document.body.appendChild(btn);
  console.log("Hello");
};

let generateExcuse = () => {
  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const whoIndex = Math.floor(Math.random() * who.length);
  const actionIndex = Math.floor(Math.random() * action.length);
  const whatIndex = Math.floor(Math.random() * what.length);
  const whenIndex = Math.floor(Math.random() * when.length);

  return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
};
