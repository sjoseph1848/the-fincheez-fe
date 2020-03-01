import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import 'firebase/firestore';
import { Stock } from '../models/Stock';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  stocksCollection: AngularFirestoreCollection<Stock>;
  stockDoc: AngularFirestoreDocument<Stock>;
  stocks: Observable<Stock[]>;
  stock: Observable<Stock>;

  constructor(private afs: AngularFirestore) {
    this.stocksCollection = this.afs.collection('stocks', ref =>
      ref.orderBy('symbol', 'asc')
    );
  }

  getStocks(): Observable<Stock[]> {
    // get clients with the id
    this.stocks = this.stocksCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Stock;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );

    return this.stocks;
  }

  newStock(client: Stock) {
    this.stocksCollection.add(client);
  }
}
