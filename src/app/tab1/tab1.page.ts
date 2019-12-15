import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Stock, SymbolsList } from '../stock';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  errorMessage = '';
  test;
  stocks: SymbolsList[] = [];
  sub: Subscription;

  constructor(private stockService: StocksService) {}

  ngOnInit(): void {
    this.sub = this.stockService.getAllStocks()
      .subscribe(
        (stocks: SymbolsList[]) => this.stocks = stocks.symbolsList);
  }

    
        // error => this.errorMessage = error
  }
