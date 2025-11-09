function addTwo(num: number) {
  return num + 2;
}

// so just like c++ function parameter require
function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaids: boolean) {}
function signUpWithDefault(
  name: string,
  email: string,
  isPaids: boolean = false
) {}

addTwo(5);
getUpper("abc");
signUpUser("hitesh", "hs@hsgmail.com", false);
export {};
