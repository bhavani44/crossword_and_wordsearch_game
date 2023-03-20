import React, { useState } from "react";

const ROWS = 15;
const COLS = 15;

const initGrid = Array(ROWS).fill().map(() => Array(COLS).fill(""));
const initColor = Array(ROWS).fill().map(() => Array(COLS).fill("white"));

const data = {
  across: {
    1: {
      clue: "A type of fruit",
      answer: "BANANA",
      row: 1,
      col: 1,
    },
    2: {
      clue: "A popular pet",
      answer: "CAT",
      row: 3,
      col: 3,
    },
    3: {
      clue: "A form of transportation",
      answer: "CAR",
      row: 5,
      col: 5,
    },
  },
  down: {
    1: {
      clue: "A domesticated animal",
      answer: "DOG",
      row: 1,
      col: 1,
    },
    2: {
      clue: "A popular fruit",
      answer: "APPLE",
      row: 3,
      col: 3,
    },
    3: {
      clue: "A means of communication",
      answer: "PHONE",
      row: 5,
      col: 5,
    },
  },
};

function NutritonCrossword() {
  return <h1>Hello</h1>
}
  

export default NutritonCrossword;
