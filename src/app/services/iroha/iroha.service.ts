import { Injectable } from '@angular/core';
import {
  CommandService_v1Client as CommandService,
  QueryService_v1Client as QueryService
} from 'iroha-helpers/lib/proto/endpoint_pb_service';

import {commands, queries,cryptoHelper} from 'iroha-helpers';
import {doc, Firestore, getDoc} from '@angular/fire/firestore';
import {StorageService} from '../storage/storage.service';
import {AuthService} from '../auth/auth.service';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import * as _ from 'lodash';
import {AlertController, LoadingController} from '@ionic/angular';
import {Router} from '@angular/router';

const moment = require('moment');

// should be the local address for testing purposes
const IROHA_ADDRESS = 'http://34.143.144.75:8081';

const commandService = new CommandService(
  IROHA_ADDRESS,
);

const queryService = new QueryService(
  IROHA_ADDRESS,
);

export interface WalletData {
  name: string;
  privateKey: string;
  publicKey: string;
  encrypted: boolean;
  balance: any;
}

export interface WalletDataTo {
  wallet: string;
  amount: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class IrohaService {
  public wallet: WalletData = {
    name: '',
    privateKey: null,
    publicKey: null,
    encrypted: false,
    balance: 0.00,
  };

  public otherWallet: WalletData = {
    name: '',
    privateKey: null,
    publicKey: null,
    encrypted: false,
    balance: 0.00,
  };

  public txs: Array<{
    from: string; to: string; amount: string; date: string; currency: string; message: string;
  }> = [];

  prevPage = false;
  nextPage = false;

  pageHash: Array<string> = [undefined];
  pageNum = 0;
  pw = '';
  note = '';
  transactionMsg = '';
  transactionFrom = '';
  transactionTo = '';
  transactionAmount = '';
  transactionDate = '';
  result = '';
  fav = [];
  noteDraft = '';
  private testprivateKey = '';
  private currentUser = null;


  constructor(private storage: StorageService,
              private ionicAuthService: AuthService,
              private _firestore: Firestore,
              private afAuth: AngularFireAuth,
              private alertController: AlertController,
              private router: Router,
              private loading: LoadingController) {
    this.afAuth.onAuthStateChanged(user => {
      this.currentUser = user;
    });
  }

  async getIrohaPrk() {
    const keyRef = doc(this._firestore, `keys/iroha`);
    const keySnap = await getDoc(keyRef);
    this.testprivateKey = keySnap.data().key;
  }

  // create iroha account during user sign up
  async createAccount(username) {
    await this.getIrohaPrk();
    await this.generateKeypair()
      .then(async ({publicKey, privateKey}) => {
        await this.storage.set(this.currentUser.uid, privateKey);
        this.wallet.privateKey = await this.storage.get(this.currentUser.uid);
        await commands.createAccount({
          privateKeys: [this.testprivateKey],
          creatorAccountId: 'admin@test',
          quorum: 1,
          commandService,
          timeoutLimit: 5000 // Set timeout limit
        }, {
          accountName: username,
          domainId: 'test',
          publicKey
        }).catch( async e => {
            this.ionicAuthService.loginIsLoading = false;
            await this.showAlert('Server Error 1', e);
            this.goToLogin();
          }
        );
      });
  }

  // generate private and public key for each created account
  async generateKeypair() {
    const keypair = cryptoHelper.generateKeyPair();
    const publicKey = keypair.publicKey;
    const privateKey = keypair.privateKey;
    return { publicKey, privateKey };
  }

  async getKey() {
    this.wallet.privateKey = '';
    this.wallet.privateKey = await this.storage.get(this.currentUser.uid);
  }

  async setName(id) {
    await this.getKey();
    await queries.getAccount({
      privateKey: this.wallet.privateKey, // Array of private keys in hex format
      creatorAccountId: id  ,// Account id, ex. admin@test
      queryService,
      timeoutLimit: 5000 // Set timeout limit
    }, {accountId: id})
      .then(account => (this.wallet.name = Object.values(account)[0].slice(0, Object.values(account)[0].length - 5)))
      .catch( async e => {
        await this.showAlert('Server Error 2', e);
        this.goToLogin();
      }
    );
  }

  async setOtherName(id) {
    await this.getKey();
    await this.getIrohaPrk();
    await queries.getAccount({
      privateKey: this.testprivateKey, // Array of private keys in hex format
      creatorAccountId: 'admin@test',// Account id, ex. admin@test
      queryService,
      timeoutLimit: 5000 // Set timeout limit
    }, {accountId: id})
      .then(account => (this.otherWallet.name = Object.values(account)[0].slice(0, this.otherWallet.name.length - 5)));
  }

  async setBalance(id) {
    await this.getKey();
    await queries.getAccountAssets({
      privateKey: this.wallet.privateKey, // Array of private keys in hex format
      creatorAccountId: id,// Account id, ex. admin@test
      queryService,
      timeoutLimit: 5000 // Set timeout limit
    }, {accountId: id, pageSize: 100, firstAssetId: 'coin#test'})
      .then(account => this.wallet.balance = Object.values(account)[0].balance)
      .catch( async e => {
        }
      );
  }

  async topUp(id, message, amount, prk) {
    const transfer = await commands.transferAsset({
        privateKeys: [prk],
        creatorAccountId: 'admin@test',
        quorum: 1,
        commandService,
        timeoutLimit: 5000 // Set timeout limit
      },
      {srcAccountId: 'admin@test', destAccountId: id, assetId: 'coin#test', description: message, amount})
      .catch( async e => {
          await this.showAlert('Server Error 5', e);
        }
      );
  }

  async topUpVerify(id, message, amount) {
    // eslint-disable-next-line max-len
    await this.getIrohaPrk();
    const transfer = await commands.transferAsset({
        privateKeys: [this.testprivateKey],
        creatorAccountId: 'admin@test',
        quorum: 1,
        commandService,
        timeoutLimit: 5000 // Set timeout limit
      },
      {srcAccountId: 'admin@test', destAccountId: id, assetId: 'coin#test', description: message, amount})
      .catch( async e => {
          await this.showAlert('Server Error 6', e);
        }
      );
  }

  async sendMoney(message, amount, temp) {
    await this.getKey();
    console.log(temp);
    // eslint-disable-next-line max-len
    await commands.transferAsset({
        privateKeys: [this.wallet.privateKey], // Array of private keys in hex format
        creatorAccountId: this.wallet.name + '@test',// Account id, ex. admin@test
        quorum: 1,
        commandService,
        timeoutLimit: 5000 // Set timeout limit
      },
      // eslint-disable-next-line max-len
      {
        srcAccountId: this.wallet.name + '@test',
        destAccountId: temp + '@test',
        assetId: 'coin#test',
        description: message,
        amount
      })
      .then(async d => {
      this.wallet.balance = '0';
      await this.setBalance(this.wallet.name + '@test');
      // eslint-disable-next-line max-len
      await this.showAlert('Transfer Success', 'You have sent RM' + amount + ' to ' + temp + '.');
      this.otherWallet.name = '';
    });
  }

  async payment(dest, message, amount) {
    await this.getKey();
    await commands.transferAsset({
        privateKeys: [this.wallet.privateKey], // Array of private keys in hex format
        creatorAccountId: this.wallet.name + '@test',// Account id, ex. admin@test
        quorum: 1,
        commandService,
        timeoutLimit: 5000 // Set timeout limit
      },
      // eslint-disable-next-line max-len
      {
        srcAccountId: this.wallet.name + '@test',
        destAccountId: dest + '@test',
        assetId: 'coin#test',
        description: message,
        amount
      });
  }

  async getTransactions() {
    await this.getKey();
    this.txs = [];// empty any previous transaction
    await queries.getAccountAssetTransactions({
        privateKey: this.wallet.privateKey, // Array of private keys in hex format
        creatorAccountId: this.wallet.name + '@test',// Account id, ex. admin@test
        queryService,
        timeoutLimit: 5000 // Set timeout limit
      },
      {
        accountId: this.wallet.name + '@test',
        assetId: 'coin#test',
        firstTxHash: undefined,
        firstTxHeight: undefined,
        firstTxTime: undefined,
        lastTxHeight: undefined,
        lastTxTime: undefined,
        ordering: {direction: undefined, field: undefined},
        pageSize: 100,
    })
      .then(
        transactions => {
          console.log(Object.values(transactions)[0]);
        if (Object.values(transactions)[0].isEmpty) {return [];}

        if(Object.values(transactions)[0].length > 0 && this.pageNum === this.pageHash.length - 1) {
          this.pageHash.push(Object.values(transactions)[0].nextTxHash);
        }
        if (this.pageNum + 1 < this.pageHash.length)
          {this.nextPage = true;}
        else  {this.nextPage = false;}

        if (this.pageNum > 0)
          {this.prevPage = true;}
        else  {this.prevPage = false;}

        Object.values(transactions)[0].forEach(t => {
          const { commandsList, createdTime } = t.payload.reducedPayload;

          commandsList.forEach(c => {
            if (!c.transferAsset) {return;}
            const {
              amount,
              assetId,
              destAccountId,
              srcAccountId,
              description
            } = c.transferAsset;

            const tx = {
              from: srcAccountId === (this.wallet.name + '@test')  ? 'You' : srcAccountId.split('@')[0],
              to: destAccountId === (this.wallet.name + '@test')? 'You' : destAccountId.split('@')[0],
              amount,
              date: createdTime,
              currency: assetId.split('#')[0],
              message: description
            };
            if (!(tx.amount === '1' && (tx.to === 'admin' || tx.from === 'admin'))) {
              this.txs.push(tx);
            }
          });
        });
          this.txs = _.orderBy(this.txs, [object => new moment(object.date)], ['desc']);
      })
     .catch( async e => {
          await this.showAlert('Server Error 9', e);
        }
      );
  }

  async setAccDetail(value, key) {
    await this.getKey();
    console.log(this.wallet.privateKey);
    console.log(this.wallet.name);
    await commands.setAccountDetail({
      privateKeys: [this.wallet.privateKey], // Array of private keys in hex format
      creatorAccountId: this.wallet.name + '@test',// Account id, ex. admin@test
      quorum: 1,
      commandService,
      timeoutLimit: 5000 // Set timeout limit
    }, {accountId: this.wallet.name + '@test', key, value})
      .catch( async e => {
          await this.showAlert('Server Error 10', e);
        }
      );
  }

  async getAccDetail(key) {
    await this.getKey();
    await queries.getAccountDetail({
      privateKey: this.wallet.privateKey, // Array of private keys in hex format
      creatorAccountId: this.wallet.name + '@test',// Account id, ex. admin@test
      queryService,
      timeoutLimit: 5000 // Set timeout limit
    }, {
      accountId: this.wallet.name + '@test',
      key,
      pageSize: 100,
      paginationKey: key,
      paginationWriter: this.wallet.name + '@test',
      writer: this.wallet.name + '@test'
    }).then (d => {
      if (key === 'sec') {
        this.pw = d[this.wallet.name + '@test'].sec;
      }
      return d[this.wallet.name + '@test'][key];
    });
  }

  async addSignatory(result){
    await this.getIrohaPrk();
    await commands.addSignatory({
      privateKeys: [this.testprivateKey],
      creatorAccountId: 'admin@test',
      quorum: 1,
      commandService,
      timeoutLimit: 5000 // Set timeout limit
    }, {accountId: 'admin@test', publicKey: result})
  .catch( async e => {
        await this.showAlert('Server Error 12', e);
      }
    );
  }

  async removeSignatory(result){
    await this.getIrohaPrk();
      await commands.removeSignatory({
        privateKeys: [this.testprivateKey],
        creatorAccountId: 'admin@test',
        quorum: 1,
        commandService,
        timeoutLimit: 5000 // Set timeout limit
      }, {accountId: 'admin@test', publicKey: result})
        .catch( async e => {
            await this.showAlert('Server Error 13', e);
          }
        );
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
  goToLogin(){
    this.router.navigateByUrl('/auth-screen', {replaceUrl: true});
  }
}

