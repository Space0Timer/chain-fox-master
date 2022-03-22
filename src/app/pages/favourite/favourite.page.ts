import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFirestore, DocumentData} from "@angular/fire/compat/firestore";
import {AuthService} from "../../services/auth/auth.service";
import {doc, Firestore, getDoc} from "@angular/fire/firestore";
import {IFavCard} from "../../shared/components/cards/fav-card/fav-card.component";
@Component({
  selector: 'app-favorite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  fav: IFavCard [] = [
  ];
  owner =  '';
  private id = this.ionicAuthService.getUid();

  constructor(
    private router: Router,
    private afs: AngularFirestore,
    private ionicAuthService: AuthService,
    private _firestore: Firestore
  ) {
  }

  ngOnInit() {
    this.loadFav();
  }

  async loadFav() {
    let data: DocumentData;
    // eslint-disable-next-line no-underscore-dangle
    const itemIdRef = doc(this._firestore, `favourites/${(this.id)}`);
    await getDoc(itemIdRef)
      .then(snap =>   { data = snap.data(); delete data.lastUpdate; delete data.id;});
    for (const key in data) {
      const idOwnerRef = doc(this._firestore, `idOwner/${(key)}`);
      const idOwnerSnap = await getDoc(idOwnerRef);
      const idOwnerName = idOwnerSnap.data();
      this.owner = idOwnerName.owner;
      const ownerRef = doc(this._firestore, `stores/${(this.owner)}`);
      const ownerSnap = await getDoc(ownerRef);
      const ownerName = ownerSnap.data();
      // eslint-disable-next-line no-underscore-dangle
      const dataRef = doc(this._firestore, `stores/${(this.owner)}/items/${(key)}`);
      const docSnap = await getDoc(dataRef);
      const dataSnap = docSnap.data();
      this.fav.push(
        {
          name: dataSnap.name,
          owner: ownerName.name,
          price: dataSnap.price,
          image: dataSnap.imageUrl,
          id: key,
        },
      );
    }
  }
  back() {
    this.router.navigateByUrl('tabs/account', {replaceUrl: true});
  }
}