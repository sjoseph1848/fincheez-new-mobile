import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Stock, SymbolsList } from './stock';
import { catchError, tap , map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StocksService {
  private API = 'https://financialmodelingprep.com/api/v3/company/stock/list';
  
  constructor(private http: HttpClient) { }

  getStocks(): Observable<SymbolsList[]> {
    return this.http.get<SymbolsList[]>(this.API)
      .pipe(map((data: SymbolsList[]) => data),
      catchError(error => {return throwError('Its a trap!')})
      );
  }

  getAllStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.API);
}
  
}
