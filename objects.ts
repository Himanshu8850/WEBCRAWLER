// const User = {
//   name: "himanshu",
//   email: "him@gmail.com",
//   isActive: true,
// };

// function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
//   return { n: name };
// }

// let newUser = { name: "him", isPaid: false, email: "him@hmail.com" };
// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "reactjs", price: 399 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// //user is of type User
// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

// type User = {
//   readonly _id: string;
//   name: string;
//   email: string;
//   isActive: boolean;
//   //not necessary to enter credit card
//   creditcardDetails?: number;
// };

type User = {
  name: string;
  isActive: boolean;
  //not necessary to enter credit card
};
let myUser: User = {
  //   _id: "adand",
  name: "h",
  //   email: "d@.com",
  isActive: false,
};

// myUser.email = "hd@gamil.com";

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardData: string;
};
//more like taking variables from a type
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

const allUsers: User[] = [];

const superHeros: string[] = [];
const heroPower: Array<number> = [];

superHeros.push("spiderman");
heroPower.push(2);

allUsers.push({ name: "", isActive: true });
