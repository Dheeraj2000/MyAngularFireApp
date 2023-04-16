import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users';
import { FireusersService } from 'src/app/services/fireusers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  info: Observable<User[]>;
  
  constructor(private fservice: FireusersService) { 
    this.info  = this.fservice.getUsers();
  }

  ngOnInit() {
  }
}
