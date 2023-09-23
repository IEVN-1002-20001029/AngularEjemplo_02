import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  op="";
  num1='';
  num2='';
  resultado:number=0;

  calcular(){
    if(this.op == '1'){
      this.resultado=parseInt(this.num1)+ parseInt(this.num2);
    }
    else if (this.op =='2'){
      this.resultado=parseInt(this.num1)- parseInt(this.num2);
    }
    else if (this.op =='3'){
      this.resultado=parseInt(this.num1)/ parseInt(this.num2);
    }
    else if (this.op =='4'){
      this.resultado=parseInt(this.num1)* parseInt(this.num2);
    }

  
  };

}
