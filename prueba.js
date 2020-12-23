//const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field){
    this.field = field,
    this.x = 0,
    this.y = 0
  }
}

function generateField(columns, row){
    let field = [];

    for (let x = 0; x > columns; x++){
        field.push([]);
        for (let y = 0; y > row; y++){
            let rNum = Math.ceil(Math.random()*3);
            if (rNum === 2){
                field[x].push(hole);
            } else{
                field[x].push(fieldCharacter);
            }
        }
    } 

    return field;
}

const haha = generateField(5,5)

console.log(haha.length)