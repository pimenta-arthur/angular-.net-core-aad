import { Component, OnInit } from '@angular/core';
import { Adal5Service } from 'adal-angular5';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: Adal5Service) { }

  ngOnInit() {
  }

  public logout() {
    this.auth.logOut();
  }

}
