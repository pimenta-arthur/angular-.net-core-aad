import { Component, OnInit } from '@angular/core';
import { Adal5Service } from 'adal-angular5';
import { IUser } from '../../shared/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private user: IUser;

  constructor(
    private adalService: Adal5Service
  ) { }

  ngOnInit() {
    this.adalService.getUser().subscribe(user => this.user = user);
  }

}
