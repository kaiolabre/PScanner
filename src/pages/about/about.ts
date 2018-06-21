import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
//import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
 
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  productUrl = null;
  constructor( private barcodeScanner: BarcodeScanner, private iab: InAppBrowser) {

  }
  scanCode(){
      this.barcodeScanner.scan().then(barcodeData =>{
        this.productUrl = barcodeData.text;
    });
  }

  openWebPage(){
    const options : InAppBrowserOptions = {
      location : 'yes',//Or 'no' 
      hidden : 'no', //Or  'yes'
      zoom : 'yes',//Android only ,shows browser zoom controls 
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no', //Android only 
      closebuttoncaption : 'Close', //iOS only
      disallowoverscroll : 'no', //iOS only 
      toolbar : 'yes', //iOS only 
      enableViewportScale : 'no', //iOS only 
      allowInlineMediaPlayback : 'no',//iOS only 
      presentationstyle : 'pagesheet',//iOS only
  };
    //opening an Url and returning an InAppBrowserObject
    let target = "_system";
    this.iab.create(this.productUrl,target,options);
  }
  
   
}
