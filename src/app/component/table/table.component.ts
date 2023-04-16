import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users';
import { ToastrService } from 'ngx-toastr';


const ELEMENT_DATA: User[] = [
  {
    "id": "user1",
    "mail": "shalini@giva.co",
    "name": "Shalini",
    "disabled": false,
    "roles": ["Inventory View", "Design"]
  },
  {
    "id": "user2",
    "mail": "shima@giva.co",
    "name": "Shima",
    "disabled": true,
    "roles": ["Discount"]
  },
  {
    "id": "user3",
    "mail": "rishabh@giva.co",
    "name": "Rishabh",
    "disabled": true,
    "roles": ["Admin"]
  }
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'mail', 'name', 'disabled', 'roles', 'toggleButton'];

  constructor(private store: Firestore, private toastr: ToastrService) { }

  @Input()
  users!: Observable<User[]>;
  dataSource!: User[];
  user!: User; 
  
  ngOnInit() {
    this.users.subscribe((data: User[]) => {
      this.dataSource = data;
    });
  
  }

  changeStatus(){
    if(this.user)
    {
      this.user.disabled = !this.user.disabled;
      const docRef = doc(this.store, 'users', this.user.id);
      updateDoc(docRef, { disabled : this.user.disabled });
      this.toastr.success(`Changes disabled states of ${this.user.name}, to ${this.user.disabled}`);
    }
    
  }
  
}
