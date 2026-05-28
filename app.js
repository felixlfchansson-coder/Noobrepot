// noob.js

const noobLevel = 1;
let xp = 0;

function code() {
  xp += 10;
  console.log("Du kodar... +10 XP");

  if (xp >= 50) {
    console.log("Level up! Du är fortfarande noob, men farligare.");
  } else {
    console.log(`XP: ${xp}/50`);
  }
}

code();
code();
code();
code();
code();