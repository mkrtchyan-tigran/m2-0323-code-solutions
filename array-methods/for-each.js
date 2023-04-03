const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((element, index) => console.log(`index number: ${index} element number: ${element}`));
console.log('\n');
values.reverse().forEach((element, index) => console.log(`index number: ${values.length - index - 1} element number: ${element}`));
