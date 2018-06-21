import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
 
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  productUrl = null;
  url:string;
  constructor( private barcodeScanner: BarcodeScanner, private iab:InAppBrowser, private themeableBrowser: ThemeableBrowser) {

  }
  scanCode(){
    
      this.barcodeScanner.scan().then(barcodeData =>{
       
        this.productUrl = barcodeData.text;
    });
  }
  openWebPage(){
    const options: ThemeableBrowserOptions = {
      
      toolbar: {
        height: 44,
        color: '#3573bbff'
      },
      title: {
        color: '#ffffffff',
        showPageTitle: true,
        staticText: 'Academy Browser'
      },
      backButton: {
        wwwImage: 'assets/img/back.png',
        align: 'left',
        event: 'backPressed'
      },
      forwardButton: {
        wwwImage: 'assets/img/forward.png',
        align: 'left',
        event: 'forwardPressed'
      },
      closeButton: {
        wwwImage: 'assets/img/close.png',
        align: 'left',
        event: 'closePressed'
      }
    }
    //opening an Url and returning an InAppBrowserObject
    const  browser: ThemeableBrowserObject = this.themeableBrowser.create(this.productUrl, '_self', options);

    browser.on('closePressed').subscribe(data => {
      browser.close();
    })
  }
  
   
}
