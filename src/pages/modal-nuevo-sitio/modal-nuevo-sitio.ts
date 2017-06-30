import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalNuevoSitioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-nuevo-sitio',
  templateUrl: 'modal-nuevo-sitio.html',
})
export class ModalNuevoSitioPage {
  lat: any  = 0;
  lng : any = 0;
 

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController) {}

  ionViewDidLoad() {
    
    
    this.lat = this.navParams.get( 'lat' );
    this.lng = this.navParams.get( 'lng' );
    
  }

  cerrarModal(){
    this.viewCtrl.dismiss();
  }

}
