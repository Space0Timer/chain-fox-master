/* eslint-disable no-underscore-dangle */
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {AngularFirestore, DocumentData} from '@angular/fire/compat/firestore';
import {doc, Firestore, getDoc, setDoc} from '@angular/fire/firestore';
import {AccessService} from '../../services/auth/access.service';
import {Router} from '@angular/router';
import {IrohaService} from '../../services/iroha.service';
import {AuthService} from '../../services/auth/auth.service';
import {ProductService} from '../../services/cafe/product.service';
import firebase from 'firebase/compat/app';
import {BehaviorSubject} from 'rxjs';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-pin-code',
  templateUrl: './pin-code.page.html',
  styleUrls: ['./pin-code.page.scss'],
})
export class PinCodePage implements OnInit {


  constructor() {}


  ngOnInit(){}

}
