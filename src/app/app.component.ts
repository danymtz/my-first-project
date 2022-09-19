import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';

  constructor (){
    this.basicTypes();
  }
  
  basicTypes(){
    console.log('Hola mundo');
    
    const TEST : number = 2;
    const VIDEO_GAME : string = 'Super smash Bros. Ultimate';
    let testTwo : string = 'true';
    
    console.log(TEST);
    console.log(testTwo);
    }
  
    arraysAndObjects(){
      let SKILLS: string[] = ['punch','kick','damage','special mov'];
      console.log(SKILLS);
  
      const character: any = {
        name: 'Waluigi',
        healthPoints: 100,
        live: true,
        skills: SKILLS
      }
  
      character.name = 'Mario';
      character['color'] = 'red';
  
      console.log(character);
    }

    ifStatement(){
      let x : number = 20, y :number = 10;

      if (x > y){
        console.log('x es mayor a y');
      }
      else if (x < y){
        console.log('x es menor a y');
      }
    }
    switchstattemen(){
      let a: number  =20, b:number = 15;

      switch (a-b){
        case 0: console.log('Result 0');
        break;

        case 5: console.log('Result 5');
        break;

        case 10: console.log('Result 10');
        break;

        default: console.log('Result NaN');
        break;
      }
    }
  whileStatement(){
    let counter: number =0;
    while (counter <= 5){
      console.log('Ejecución número'+counter);
      counter++;
    }
  }   
  doWhileStatement(){
    let i: number = 5;
    do{
      console.log('do Ejecución número'+i);
      i++;
    }while(1<=5);
  }
forStatement(){
  let array:number[] = [10,20,30,40,50,60,70,80,90];

  for (const INDEX in array){
    console.log(INDEX);
    console.log(array[INDEX]);
  }

  console.log('---------------------------');
  for (let i:number=1;array.length; i+=3){
    console.log(i);
    console.log(array[i]);
  }

  console.log('---------------------------');
  array.forEach(function (value,index){
    if (value == 50)
    console.log(value);
    console.log(index);
  })
}

tryCatchStatement(){
  try{
    console.log('Hola');
    throw "Se presentó un error";
  }
  catch(e){
    console.log(e);
  }
}
 basicFunction(){
  function sumNumbers(a : number, b :number) : number {
    return a+b;
  }
  console.log(sumNumbers(2,5));

  const ARROW_NUM = (a: number, b: number): number => { return a+b}
  console.log(ARROW_NUM(1,8));

  function multiplyNumbers (a: number, b: number, c?: number): number {
    return a * b * (c ?? 1);
  }
  console.log(multiplyNumbers(2,2));
  console.log(multiplyNumbers(2,2));
 } 

 /* othetFunctions(){
  let character: Character-HP = {
    name : 'Mario',
    live : true,
    healthPoints : 50,
    skills: ['punch','kick','damage']
  } 
 }*/
}