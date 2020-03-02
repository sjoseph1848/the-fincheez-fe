import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../models/Stock';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocks: Stock[];
  totalValue: number = 0;
  constructor(private stockService: StockService) { }

  ngOnInit() {
      this.stockService.getStocks().subscribe(stocks => {
      this.stocks = stocks;
      });
}
}
