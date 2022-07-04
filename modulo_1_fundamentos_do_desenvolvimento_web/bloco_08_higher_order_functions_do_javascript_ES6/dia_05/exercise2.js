const sum = (...args) => args.reduce((acc, curr) => acc + curr ,0);
console.log(sum(2,3,5,7,10));