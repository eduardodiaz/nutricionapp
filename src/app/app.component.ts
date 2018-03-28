import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAnuupFPGAFwg_AqzvVon9thJ02l_XBV6w",
      authDomain: "appnutricion-c6606.firebaseapp.com"
    })
  }
}
