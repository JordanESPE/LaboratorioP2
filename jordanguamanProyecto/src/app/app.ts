import { Component, signal } from '@angular/core';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('jordanguamanProyecto');

  constructor() {

    let calculator = new Calculator();
    let result = calculator.multiply(3, 5);
    
    // c. Mediante condicionales imprimir en consola si cumple con dos las condiciones propuestas
    console.log(result === 15);
    console.log(result !== 9);

    
    let result2 = calculator.divide(6, 3);
    console.log(result2 === 2);
    console.log(result2 !== 3);

    let result3 = calculator.divide(6, 0);
    console.log(result3 === null);
    console.log(result3 !== 3);
  }
}


