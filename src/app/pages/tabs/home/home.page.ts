import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth/auth.service';
import {doc, Firestore, getDoc, setDoc} from '@angular/fire/firestore';
import {IrohaService} from '../../../services/iroha.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  successMsg = '';
  errorMsg = '';
  private uid = this.ionicAuthService.getUid();
  private id: any;

  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private _firestore: Firestore,
    private changeRef: ChangeDetectorRef,
    private iroha: IrohaService
  ) { }

  ngOnInit() {
    this.getUserId();
  }

  logOut() {
    this.ionicAuthService.logout()
      .then((response) => {
        this.errorMsg = '';
        this.successMsg = 'Logout successful.';
        this.goToLogin();
      }, error => {
        this.errorMsg = error.message;
        this.successMsg = '';
      });
  }

  goToLogin() {
    this.router.navigate(['auth-screen']);
  }

  async getUserId() {
    // eslint-disable-next-line no-underscore-dangle
    const docRef = doc(this._firestore, 'users', this.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data().username.concat('@test'));
      this.id = docSnap.data().username.concat('@test');
      this.iroha.setName(this.id);
      this.iroha.setBalance(this.id);
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  }

  qrCode() {
    this.router.navigate(['qr-code']);
  }
}
