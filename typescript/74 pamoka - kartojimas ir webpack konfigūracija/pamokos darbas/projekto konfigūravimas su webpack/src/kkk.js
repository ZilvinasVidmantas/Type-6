(async () => {
  const response = await fetch('https://belekur.lt');
  console.log(response);
})();

let a = 7;
let b = 8 + a


const add = (a, b) => {
  return a + b;
}

for (let i = 0; i < 10; i++) {
  console.log(add(a + i, b + i));
}

console.log({
  a, b
})