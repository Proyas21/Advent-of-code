import fs from "fs";

const input = fs.readFileSync("./day-1_input.txt", 'utf-8');
const input_array = input.split('\n').map(n=>Number(n));

console.log("day-01");
console.log("Part-1");
console.log("How many measurements are larger than the previous measurement?");
console.log(part_1(input_array));
console.log("Part-2");
console.log("How many sums are larger than the previous sum?");
console.log(part_2(input_array));

function part_1(array){

    let count = 0;
    array.reduce((p, c)=>{
        if(p < c){
            count++;
        }
        return c;
    });

    return count;
}

function part_2(array){
    let pp, newArr = [];
    // pp = the item before p

    array.reduce((p, c)=>{

        if((pp || pp==0) && (c|| pp==0)){
            newArr.push(pp+p+c);
        }

        pp = p;
        return c;
    });

    console.log("end");
    return part_1(newArr);
}