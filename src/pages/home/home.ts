import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import  firebase from 'firebase';
import { OneSignal} from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public platform: Platform) {

  }


  ionViewDidLoad(){
 
  }


  ChargeCard(){
    let card = '4084084084084081'
    let month = '12'
    let cvc = '408'
    let year = '80'
    let amount = '1000000'
    let email = 'user@email.com'

    let loading = this.loadingCtrl.create({
      content: 'Processing Charge...'
    });
  
    loading.present();
        this.platform.ready().then(() => {
          if (this.platform.is('cordova')) {
          // Now safe to use device APIs
          (<any>window).window.PaystackPlugin.chargeCard(
            (resp) =>{
              loading.dismiss();
              //this.pop.showPayMentAlert("Payment Was Successful", "We will Now Refund Your Balance");
              console.log('charge successful: ', resp);
              alert('Payment Was Successful' )
            },
            (resp) =>{
              loading.dismiss();
           alert('We Encountered An Error While Charging Your Card' )
            },
            {
              cardNumber: card, 
              expiryMonth: month, 
              expiryYear: year, 
              cvc: cvc,
              email: email,
              amountInKobo: amount,
          });
        }else{
         
        }
      })
  
  
  }

  
}
