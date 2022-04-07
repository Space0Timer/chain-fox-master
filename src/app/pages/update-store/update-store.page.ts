import {Component, OnInit, Optional} from '@angular/core';
import {FirebaseUploadService} from '../../services/cafe/firebase-upload.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {collection, doc, Firestore, getDocs, query, setDoc} from '@angular/fire/firestore';
import {AuthService} from '../../services/auth/auth.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {ProductService} from '../../services/cafe/product.service';
import {IFoodCard} from '../../shared';
import {AlertController, IonRouterOutlet, ModalController} from '@ionic/angular';
import {AddItemComponent} from '../../shared/components/modal/add-item/add-item.component';

@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.page.html',
  styleUrls: ['./update-store.page.scss'],
})
export class UpdateStorePage implements OnInit {
  foodStore: IFoodCard[] = [
  ];
  barStatus = false;
  errorMessage = '';
  imageUploads = [];
  name = '';
  form: FormGroup;
  type = false;
  isLoading: boolean;
  imageUrl = '';
  private uid = this.ionicAuthService.getUid();

  constructor(private firebaseUploadService: FirebaseUploadService,
              private router: Router,
              private _firestore: Firestore,
              private ionicAuthService: AuthService,
              private afs: AngularFirestore,
              private product: ProductService,
              private modalCtrl: ModalController,
              private routerOutlet?: IonRouterOutlet) {
    this.initForm();
  }

  async ngOnInit() {
    await this.addItemToStoreInit();
  }

  async doRefresh(event) {
    await this.addItemToStoreInit();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  uploadPhoto(event) {
    this.barStatus = true;
    this.firebaseUploadService.storeImage(event.target.files[0]).then(
      (res: any) => {
        if (res) {
          console.log(res);
          this.imageUrl = res;
          this.imageUploads.unshift(res);
          this.barStatus = false;
        }
      },
      (error: any) => {
        this.errorMessage = 'File size exceeded. Maximum file size 1 MB';
        this.barStatus = false;
      }
    );
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      price: new FormControl(null, {validators: [Validators.required]}), // added email validator also
      category: new FormControl(null, {validators: [Validators.required]}), // added email validator also
      description: new FormControl(null, {validators: [Validators.required]}), // added email validator also
    });
  }

  changeType() {
    this.type = !this.type;
  }

  async onSubmit() {
    this.errorMessage = '';
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    if(this.imageUrl === '') {
      this.errorMessage = 'You must upload an image for your item to proceed.';
      return;
    }
    this.isLoading = true;
    console.log(this.form.value);
    await this.uploadStoreDetails(this.form.value);
    this.isLoading = false;
    await this.addItemToStoreInit();
  }

  async uploadStoreDetails(formValue) {
    // eslint-disable-next-line no-underscore-dangle
    const pushKey = this.afs.createId();
    let dataRef = doc(this._firestore, `stores/${(this.uid)}/items/${(pushKey)}`);
    await setDoc(dataRef, {
      name: formValue.name,
      price: formValue.price,
      category: formValue.category,
      description:  formValue.description,
      imageUrl: this.imageUrl,
      status: 'available',
      id: pushKey
    });
    dataRef = doc(this._firestore, `idOwner/${(pushKey)}`);
    await setDoc(dataRef, {
      owner: this.uid,
    });
    // create categories
    dataRef = doc(this._firestore, `stores/${(this.uid)}/categories/${(formValue.category)}`);
    await setDoc(dataRef, {
      name: formValue.name,
    });
    // add items to categories
    await this.afs.collection(`stores/${(this.uid)}/categories/`).doc(formValue.category).update({
      [pushKey]: 1,
    });
    dataRef = doc(this._firestore, `idOwner/${(pushKey)}`);
    await setDoc(dataRef, {
      owner: this.uid,
    });
  }

  async addItemToStoreInit() {
    this.foodStore = [];
    const dataRef = collection(this._firestore, 'stores/'+this.uid+'/items');
    const q = query(dataRef);
    const querySnapshot = await getDocs(q);
    // eslint-disable-next-line @typescript-eslint/no-shadow
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log(data);
      this.foodStore.push(
        {
          owner: '',
          name: data.name,
          description: data.description,
          image: data.imageUrl,
          price: data.price,
          id: data.id,
          category: data.category,
          status: data.status
        },
      );
    });
  }

  async openAddItemModal() {
    const modal = await this.modalCtrl.create({
      component: AddItemComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    modal.onDidDismiss().then((data) => {
      console.log('test');
      this.ngOnInit();
    });
    return await modal.present();
  }

  back() {
    this.router.navigateByUrl('tabs/account', {replaceUrl: true});
  }
}
