import { Injectable } from '@angular/core';
import {
  CommandService_v1Client as CommandService,
  QueryService_v1Client as QueryService
} from 'iroha-helpers/lib/proto/endpoint_pb_service';

import {commands, queries,cryptoHelper} from 'iroha-helpers';
import {doc, Firestore, getDoc, setDoc} from '@angular/fire/firestore';
import {StorageService} from './storage.service';
import {AuthService} from './auth/auth.service';
import {AngularFireAuth} from "@angular/fire/compat/auth";

const IROHA_ADDRESS = 'http://34.101.37.91:8081';

const commandService = new CommandService(
  IROHA_ADDRESS,
);

const queryService = new QueryService(
  IROHA_ADDRESS,
);

const COMMAND_OPTIONS = {
  privateKeys: ['e2e3c49be71ae0e1721b1a573f3d49756b87fce58679243dd4bbe09008158cf0'],
  creatorAccountId: 'admin@test',
  quorum: 1,
  commandService,
  timeoutLimit: 5000 // Set timeout limit
};

const QUERY_OPTIONS = {
  privateKey: 'e2e3c49be71ae0e1721b1a573f3d49756b87fce58679243dd4bbe09008158cf0',
  creatorAccountId: 'admin@test',
  queryService,
  timeoutLimit: 5000
};

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

  private currentUser = null;

  constructor(private storage: StorageService,
              private ionicAuthService: AuthService,
              private _firestore: Firestore,
              private afAuth: AngularFireAuth) {
    this.afAuth.onAuthStateChanged(user => {
      this.currentUser = user;
    });
  }

  // create iroha account during user sign up
  async createAccount(username) {
    await this.generateKeypair()
      .then(async ({publicKey, privateKey}) => {
        console.log(this.currentUser.uid);
        await this.storage.set(this.currentUser.uid, privateKey);
        await this.storage.get(this.currentUser.uid);
        await commands.createAccount(COMMAND_OPTIONS, {
          accountName: username,
          domainId: 'test',
          publicKey
        })
          .catch(e => console.log(e));
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
    this.wallet.privateKey = await this.storage.get(this.currentUser.uid);
  }

  async setName(id) {
    await queries.getAccount(QUERY_OPTIONS, {accountId: id})
      .then(account => (this.wallet.name = Object.values(account)[0].slice(0, this.wallet.name.length - 5)));
  }

  async setOtherName(id) {
    await queries.getAccount(QUERY_OPTIONS, {accountId: id})
      .then(account => (this.otherWallet.name = Object.values(account)[0].slice(0, this.otherWallet.name.length - 5)));
  }

  async setBalance(id) {
    await queries.getAccountAssets(QUERY_OPTIONS, {accountId: id, pageSize: 100, firstAssetId: 'coin#test'})
      .then(account => this.wallet.balance = Object.values(account)[0].balance);
  }

  async topUp(id, message, amount) {
    // eslint-disable-next-line max-len
    try {
      const transfer = await commands.transferAsset(COMMAND_OPTIONS,
        {srcAccountId: 'admin@test', destAccountId: id, assetId: 'coin#test', description: message, amount});
    }
    catch(e) {
      throw(e);
    }

  }

  async sendMoney(message, amount) {
    await this.getKey();
    console.log(this.wallet.name);
    console.log(this.wallet.privateKey);
    console.log(this.otherWallet.name);
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
        destAccountId: this.otherWallet.name + '@test',
        assetId: 'coin#test',
        description: message,
        amount
      });
  }

  async payment(dest, message, amount) {
    await this.getKey();
    console.log(this.wallet.privateKey);
    console.log(dest);
    console.log(this.wallet.name);
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
    this.txs = [];// empty any previous transaction
    await queries.getAccountAssetTransactions(QUERY_OPTIONS,
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
            this.txs.push(tx);
          });

        });
        // comment orderBy to get txs order from irohad, i.e. oldest tx to latest
        // remove comment to reverse txs, i.e. latest tx to oldest (better done in irohad imho)
        //this.txs = _.orderBy(this.txs, [object => new moment(object.date)], ['desc']);
      })
      .catch(err => console.log(err));
  }
}

