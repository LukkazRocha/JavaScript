/* const a = 0; // false

const b = null; // false

const c = 'Teste';

console.log(a || b || c);

console.log(b ?? c);
 */

let a = 0;

let b = a || 42;

console.log({ a, b });

b = a ?? 42;

console.log({ a, b });

let c = undefined ?? 42;

console.log({ c });
