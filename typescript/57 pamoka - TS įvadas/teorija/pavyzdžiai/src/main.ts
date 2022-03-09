const a: number = 7;
const b: string = 'Stringas';
const c = true;

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
  return a + b;
};

const result1 = add(7, 9);
const result2 = add('labas ', 'vakaras');
