import fs from "fs";

const input = fs.readFileSync("./day-2_input.txt", 'utf-8');
const input_array = input.split('\n').map(n=>n.split(" "));

console.log("day-02");
console.log("Part-1");
console.log("What do you get if you multiply your final horizontal position by your final depth?");
console.log(part_1(input_array));
console.log("Part-2");
console.log("What do you get if you multiply your final horizontal position by your final depth?");
console.log(part_2(input_array));

function part_1(array){
    let position = {
        horizontal: 0,
        depth: 0,
        aim: 0
    };
    array.forEach(element => {
        switch(element[0]){
            case "forward":
                position.horizontal += Number(element[1]);
                break;
            case "up":
                position.depth -= Number(element[1]);
                break;
            case "down":
                position.depth += Number(element[1]);
                break;
        }
    });
    return position.horizontal * position.depth;
}

function part_2(array){
    let position = {
        horizontal: 0,
        depth: 0,
        aim: 0
    };
    array.forEach(element => {
        switch(element[0]){
            case "forward":
                position.horizontal += Number(element[1]);
                position.depth += position.aim * Number(element[1]);
                break;
            case "up":
                position.aim -= Number(element[1]);
                break;
            case "down":
                position.aim += Number(element[1]);
                break;
        }
    });
    return position.horizontal * position.depth;
}