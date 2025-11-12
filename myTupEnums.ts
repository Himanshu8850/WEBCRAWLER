const user: (string | number)[] = [1, "hell"];
//an array that contains bit number and string

//now what if we have restriction
//number comes before string

let tUser: [string, number, boolean];

tUser = ["him", 1224, true];

//must have 3 numbers
let rgb: [number, number, number] = [32, 323, 323];
const newUser: typeof tUser = ["example@google.com", 112, false];

//wrong
// newUser.push(true);

console.log(newUser);

enum SeatChoice {
  //different related datatypes in one
  AISLE,
  MIDDLE,
  WINDOW,
  FOURTH,
}

//const before enum is preferred as javascript code of
//enum is a lot but const resolves this.
const hcSeat = SeatChoice.AISLE;

export {};
