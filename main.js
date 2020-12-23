const prompt = require('prompt-sync')({sigint: true});

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

  static generateField(columns, row){
    let field = [];
  
    for (let x = 0; x < columns; x++){
        field.push([]);
        for (let y = 0; y < row; y++){
            let rNum = Math.ceil(Math.random()*3);
            if (rNum === 2){
                field[x].push(hole);
            } else{
                field[x].push(fieldCharacter);
            }
        }
    } 
  
    field[0][0] = pathCharacter;
    let ry = Math.floor(Math.random() * row)
    let rx = Math.floor(Math.random() * columns)
  
    while (ry === 0 && rx === 0){
    ry = Math.floor(Math.random() * row)
    rx = Math.floor(Math.random() * columns)
    }
  
    field[rx][ry] = hat
  
  
    return field;
  }

  displayField(){
    let res = []
    for (let x = 0; x < this.field.length; x++){
        res.push(this.field[x].join("") + '\n')
    }
    console.log(res.join(""))
  }

  playGame(){
    const answer = prompt('Which way? ').toUpperCase();

    if (answer === 'U'){
      this.y --;

      if (this.y < 0 || this.y > this.field.length){
        console.log('You went out');

      } else {
        if (this.field[this.y][this.x] === hat){
          console.log('Congratulations you won')
        } else if (this.field[this.y][this.x] === hole){
          console.log('You lost')
        } else {
          this.field[this.y][this.x] = pathCharacter;
          this.displayField()
          this.playGame()
        }
        
      }
    }

    if (answer === 'D'){
      this.y ++;

      if (this.y < 0 || this.y > this.field.length){
        console.log('You went out');

      } else {
        if (this.field[this.y][this.x] === hat){
          console.log('Congratulations you won')
        } else if (this.field[this.y][this.x] === hole){
          console.log('You lost, you fell into a hole')
        } else {
          this.field[this.y][this.x] = pathCharacter;
          this.displayField()
          this.playGame()
        }
        
      }
    }
    if (answer === 'L'){
      this.x --;

      if (this.x < 0 || this.x > this.field[0].length){
        console.log('You went out');

      } else {
        if (this.field[this.y][this.x] === hat){
          console.log('Congratulations you won')
        } else if (this.field[this.y][this.x] === hole){
          console.log('You lost, you fell into a hole')
        } else {
          this.field[this.y][this.x] = pathCharacter;
          this.displayField()
          this.playGame()
        }
        
      }
    }

    if (answer === 'R'){
      this.x ++;

      if (this.x < 0 || this.x > this.field[0].length){
        console.log('You went out');

      } else {
        if (this.field[this.y][this.x] === hat){
          console.log('Congratulations you won')
        } else if (this.field[this.y][this.x] === hole){
          console.log('You lost, you fell into a hole')
        } else {
          this.field[this.y][this.x] = pathCharacter;
          this.displayField()
          this.playGame()
        }
        
      } 

    } 
  }
  
}


const haha = new Field(Field.generateField(6,5))

haha.displayField()

haha.playGame()