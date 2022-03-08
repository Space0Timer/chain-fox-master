import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {
  CommandService_v1Client as CommandService,
  QueryService_v1Client as QueryService
} from 'iroha-helpers/lib/proto/endpoint_pb_service';
import {queries} from 'iroha-helpers';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import {AuthService} from '../../../../services/auth/auth.service';
import {IrohaService} from "../../../../services/iroha.service";

const IROHA_ADDRESS = 'http://localhost:8081';

const commandService = new CommandService(
  IROHA_ADDRESS,
);

const queryService = new QueryService(
  IROHA_ADDRESS,
);

const COMMAND_OPTIONS = {
  privateKeys: ['e2e3c49be71ae0e1721b1a573f3d49756b87fce58679243dd4bbe09008158cf0'], // Array of private keys in hex format
  creatorAccountId: 'admin@test', // Account id, ex. admin@test
  quorum: 1,
  commandService,
  timeoutLimit: 5000
};

const QUERY_OPTIONS = {
  privateKey: 'e2e3c49be71ae0e1721b1a573f3d49756b87fce58679243dd4bbe09008158cf0',
  creatorAccountId: 'admin@test',
  queryService,
  timeoutLimit: 5000
};
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  constructor(
    private router: Router,
    private ionicAuthService: AuthService,
    private _firestore: Firestore,
    private iroha: IrohaService) {
    }

  ngOnInit() {
    this.iroha.getTransactions();
  }

  back() {
    this.router.navigateByUrl('/tabs', {replaceUrl: true});
  }
}
