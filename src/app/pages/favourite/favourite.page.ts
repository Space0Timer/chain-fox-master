import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthService} from "../../services/auth/auth.service";
@Component({
  selector: 'app-favorite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {


  private id = this.ionicAuthService.getUid();

  constructor(
    private router: Router,
    private afs: AngularFirestore,
    private ionicAuthService: AuthService
  ) {
  }

  ngOnInit() {
    this.loadFav();
  }

  async loadFav() {
    this.afs.collection('favourites').doc(this.id).valueChanges().subscribe((result: any) => {
      // Filter out our id
      delete result.id;
      console.log(result);
    });

  }
  back() {
    this.router.navigateByUrl('tabs/account', {replaceUrl: true});
  }
}
