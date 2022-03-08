import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-screen',
  templateUrl: './auth-screen.page.html',
  styleUrls: ['./auth-screen.page.scss'],
})

export class AuthScreenPage implements OnInit {

  segmentValue = '1';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {}


  segmentChanged(event) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }

  checkAuth() {
    this.auth.checkAuth().then(response => {
      console.log(response);
      if(response) {return true;}
      this.navigate();
      return false;
    })
      .catch(e => {
        this.navigate();
        return false;
      });
  }
  navigate() {
    this.router.navigateByUrl('/tabs', {replaceUrl: true});
  }
}
