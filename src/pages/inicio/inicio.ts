import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { ModalNuevoSitioPage } from "../modal-nuevo-sitio/modal-nuevo-sitio";


/**
 * Generated class for the InicioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google: any;
@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  map: any // Manejador del mapa.
  coords : any = { lat: 0, lng: 0 }


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public geolocation: Geolocation,
    public modalCtrl : ModalController,) {

    platform.ready().then(() => {
      //La plataforma esta lista y tenemos acceso a los plugins
      this.obtenerPosicion();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  obtenerPosicion():any{ this.geolocation.getCurrentPosition().then(res => {
    this.coords.lat = res.coords.latitude;
    this.coords.lng = res.coords.longitude;
    this.loadMap(); })
  .catch( (error)=>{
    console.log(error);
    }
  );
}

  loadMap(){
    let mapContainer = document.getElementById('map');
    this.map = new google.maps.Map(mapContainer,{
      center: this.coords,
      zoom:12
    });
    //Colocamos el marcador
    let miMarker = new google.maps.Marker({
      icon: 'assets/img/ico_estoy_aqui.png',
      map: this.map,
      position: this.coords
    })
  }

  nuevoSitio(){
    console.log(this.coords);
    let mimodal = this.modalCtrl.create( ModalNuevoSitioPage,this.coords);
    mimodal.present();
  }

}
