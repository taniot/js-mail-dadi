'use strict';

const userNumber = Math.floor(Math.random() * 6) + 1;
const computerNumber = Math.floor(Math.random() * 6) + 1;

if (userNumber > computerNumber) {
  console.log(
    `Vince l'utente con il punteggio di ${userNumber} a ${computerNumber}`
  );
} else if (computerNumber > userNumber) {
  console.log(
    `Vince il computer con il punteggio di ${computerNumber} a ${userNumber}`
  );
} else {
  console.log(
    `Computer e utente hanno pareggiato con il punteggio di ${computerNumber}`
  );
}
