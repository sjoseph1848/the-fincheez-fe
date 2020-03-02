import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Stock } from '../../models/Stock';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {
  id: string;
  stock: Stock = {
    id: '',
    name: '',
    numberOfShares: 0,
    purchasePricePerShare: 0,
    symbol: ''
  }

  constructor(
    private flashMessage: FlashMessagesService,
    private stockService: StockService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
     // Get client
    this.stockService.getStock(this.id).subscribe(stock => this.stock = stock);
  }

  onSubmit({value, valid}: {value: Stock, valid: boolean}) {
    //console.log(value, valid);
    if(!valid){
      // Show error
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      // Add id to stock
      value.id = this.id;
      // Updated Stock
      this.stockService.updateStock(value);
      // Show message
      this.flashMessage.show('Stock updated', {
        cssClass: 'alert-success', timeout: 4000
      });
      // Redirect to dash
      this.router.navigate(['/stock/' + this.id]);
    }
  }

}
