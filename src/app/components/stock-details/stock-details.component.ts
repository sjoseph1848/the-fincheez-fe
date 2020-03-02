import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Stock } from '../../models/Stock';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  id: string;
  stock: Stock;
  hasBalance = false;
  showBalanceUpdateInput = false;

  constructor(
    private stockService: StockService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
      // Get id from url
      this.id = this.route.snapshot.params['id'];
      // Get client
      this.stockService.getStock(this.id).subscribe(stock => {
        if (stock != null) {
          if (stock.purchasePricePerShare > 0) {
            this.hasBalance = true;
          }
        }

        this.stock = stock;
        console.log(this.stock);
      });
  }

  onDeleteClick() {
    if (confirm('Are you sure you want to delete this stock?')) {
      this.stockService.deleteStock(this.stock);
      this.flashMessage.show('Stock removed', {
        cssClass: 'alert-success',
        timeout: 4000
      });
      this.router.navigate(['/'])
    }
  }

  // updateStock() {
  //   this.stockService.updateStock(this.stock);
  //   this.flashMessage.show('Total Shares Updated', {
  //     cssClass: 'alert-success',
  //     timeout: 4000
  //   });
  // }

}
