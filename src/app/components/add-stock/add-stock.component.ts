import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Stock } from '../../models/Stock';
import { StockService } from '../../services/stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})

export class AddStockComponent implements OnInit {
  stock: Stock = {
    id: '',
    name: '',
    numberOfShares: 0,
    purchasePricePerShare: 0,
    symbol: ''
  }

  @ViewChild('stockForm', {static: false}) form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private stockService: StockService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Stock, valid: boolean}) {
    //console.log(value, valid);
    if(!valid){
      // Show error
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      // Add new client
      this.stockService.newStock(value);
      // Show message
      this.flashMessage.show('New stock added', {
        cssClass: 'alert-success', timeout: 4000
      });
      // Redirect to dash
      this.router.navigate(['/'])
    }
  }

}
