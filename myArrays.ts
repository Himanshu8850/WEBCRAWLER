const superHeroes: string[] = [];
const herosPower: Array<number> = [];

superHeroes.push("spiderman");
const Mlmodels: number[][] = [
  [23, 34, 45],
  [24, 4245, 355],
  [434, 43, 532],
];
console.log(Mlmodels[0]);

type Admin = {
  username: string;
  id: number;
};

let him: User | Admin = { name: "him", id: 334, isActive: false };

function getDbId(id: number | string) {
  if (typeof id == "string") {
    id.toLowerCase();
  }
  console.log(`DB id is : ${id}`);
}

getDbId(3);

const data: string[] = ["1", "2", "3"];

const data2: string[] | number[] = [1, 2, 3];

let pi: 3.14 = 3.14;
//only 3.14 value is allowed

//Like enum in c++
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";

//not allowed
// seatAllotment = "crew";

export {};
