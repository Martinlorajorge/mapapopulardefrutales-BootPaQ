import { MapsAPILoader,MouseEvent } from '@agm/core';
// import { google } from '@agm/core/services/google-maps-types';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-google',
    templateUrl: './google.component.html',
    styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {

    lat: number;
    lng: number;
    zoom: number;
    scrollwheel = false;
    address: string;
    private geoCoder;

    @ViewChild('search')
    public searchElementRef: ElementRef;
    // custom map style
    mapStyles = [{ 'featureType': 'water', 'stylers': [{ 'visibility': 'on' }, { 'color': '#bdd1f9' }] }, { 'featureType': 'all', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#334165' }] }, { featureType: 'landscape', stylers: [{ color: '#e9ebf1' }] }, { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#c5c6c6' }] }, { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#fff' }] }, { featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#fff' }] }, { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#d8dbe0' }] }, { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#cfd5e0' }] }, { featureType: 'administrative', stylers: [{ visibility: 'on' }, { lightness: 33 }] }, { featureType: 'poi.park', elementType: 'labels', stylers: [{ visibility: 'on' }, { lightness: 20 }] }, { featureType: 'road', stylers: [{ color: '#d8dbe0', lightness: 20 }] }];

    constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

    ngOnInit() {
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
        this.setCurrentLocation();
        this.geoCoder = new google.maps.Geocoder;
  
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
  
            //set latitude, longitude and zoom
            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
            this.zoom = 12;
          });
        });
      });
    }
    private setCurrentLocation() {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.zoom = 15;
            this.getAddress(this.lat, this.lng);
          });
        }
      }
      markerDragEnd($event: MouseEvent) {
        console.log($event);
        this.lat = $event.coords.lat;
        this.lng = $event.coords.lng;
        this.getAddress(this.lat, this.lng);
      }
      getAddress(latitude, longitude) {
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
          console.log(results);
          console.log(status);
          if (status === 'OK') {
            if (results[0]) {
              this.zoom = 12;
              this.address = results[0].formatted_address;
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
    
        }); 
      }

}
