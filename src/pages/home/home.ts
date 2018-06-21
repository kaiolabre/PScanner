import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  productUrl = null;
  createdCode = null;
  constructor( private barcodeScanner: BarcodeScanner) {

  }
  createCode(){
    this.createdCode = this.productUrl;
  }
}
