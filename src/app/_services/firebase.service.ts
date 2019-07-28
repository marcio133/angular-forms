import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import Cost from '../_models/Cost';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // Your web app's Firebase configuration
  // Required for side-effects
  constructor(public db: AngularFirestore, private toastr: ToastrService) {
  }

  createCost(data: Cost) {
    return this.db.collection('costs').add(data).then((res) => {
      this.toastr.success('Cost added', 'Success');
      return res
    }).catch(() => {
      this.toastr.error('Please try again later', 'Something went wrong');
    });
  }
}
