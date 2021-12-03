import fs from "fs";

const input = fs.readFileSync("./day-3_input.txt", 'utf-8');
const input_array = input.split('\n');

console.log("day-03");
console.log("Part-1");
console.log("What is the power consumption of the submarine?");
console.log(part_1(input_array));
console.log("Part-2");
console.log("What is the life support rating of the submarine?");
console.log(part_2(input_array));

function part_1(array){

    const count = common_bit_count(array);
    let gamma = '';
    let epsilon = '';

    count.forEach(digit=>{
        if(digit.ones > digit.zeros){
            gamma+= '1';
            epsilon+= '0';
        }
        else{
            gamma+= '0';
            epsilon+= '1';
        }
    });

    return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

function part_2(array){
    const oxygen_generator_rating = parseInt(match_criteria(array, 'O2')[0], 2);
    const CO2_scrubber_rating = parseInt(match_criteria(array, 'CO2')[0], 2);
    console.log(oxygen_generator_rating, CO2_scrubber_rating);

    return oxygen_generator_rating * CO2_scrubber_rating;
}

function match_criteria(array, criteria, position = 0){
    let count = common_bit_count(array);
    let common = '';

    if (criteria=='O2'){
        common = (count[position].ones >= count[position].zeros) ? '1' : '0';
    }
    else if (criteria=='CO2'){
        common = (count[position].ones >= count[position].zeros) ? '0' : '1';
    }

    let new_array = [];
    
    new_array = array.filter(value=>value[position]==common);
    // console.log(new_array);
    if (new_array.length == 1 || new_array[0].length == position) return new_array;
    return match_criteria(new_array, criteria, ++position);
}

function common_bit_count(array){
    let count=[];

    array.forEach((num, index) => {
        for(let i = 0; i < num.length; i++){
            if(!count[i]) count.push({ones: 0, zeros: 0});

            if(num[i] == '1'){
                count[i].ones++;
            } 
            else {
                count[i].zeros++;
            }
        }
    });

    // console.log(count);
    return count;
}
