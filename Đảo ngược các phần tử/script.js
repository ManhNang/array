let x = [-3, 5, 1, 3, 2, 10, 5];

for(let i = 0; i < Math.floor(x.length / 2); i++){
    let tmp = x[i];
    x[i] = x[x.length - 1 - i];
    x[x.length - 1 - i] = tmp;
}

document.write(x);



