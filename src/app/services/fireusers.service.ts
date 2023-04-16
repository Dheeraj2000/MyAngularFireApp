import { Injectable } from '@angular/core';

import { User } from './../models/users';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireusersService {

  coll: any

  constructor(store: Firestore) {
     this.coll = collection(store, 'users');
   }

  getUsers() {
    return collectionData(this.coll, {idField: 'id'}) as Observable<User[]>;
  }
}
