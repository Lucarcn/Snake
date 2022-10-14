import { Component } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	val= '0';
	hval = '0';
	lastop = '*';

	rfni = true;


	numgs = [
	[7,8,9, 'X'],
	[4,5,6, '-'],
	[1,2,3, '+'],
	[0,'C','=','/']
	];

	onpress(symbol){
	console.log(symbol);
	 if (typeof symbol == 'number') {

		console.log('is a number');
		if(this.rfni)
			this.val = '' + symbol;
		else 
			this.val += '' + symbol;
		this.rfni = false;
		}
		
	else if (symbol === 'C' ){
		this.val = '0';
		this.rfni = true;
	}

    else if (symbol === '=') {
      if (this.lastop === 'X')
        this.val = '' + (parseInt(this.hval) * parseInt(this.val));
      else if (this.lastop === '-')
        this.val = '' + (parseInt(this.hval) - parseInt(this.val));
      else if (this.lastop === '+')
        this.val = '' + (parseInt(this.hval) + parseInt(this.val));
      else if (this.lastop === '/')
        this.val = '' + (parseInt(this.hval) / parseInt(this.val));
      this.rfni = true;
    }
	else { //ops
		this.rfni = true;
		this.hval = this.val;
		this.lastop = symbol;
	}

}
  constructor() {}

}
