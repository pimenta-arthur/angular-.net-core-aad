import { Component, OnInit } from '@angular/core';
import { Adal5Service } from 'adal-angular5';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private auth: Adal5Service) {
    this.auth.init(environment.adalConfig);
  }

  ngOnInit() {
    // Handle callback if this is a redirect from Azure
    this.auth.handleWindowCallback();
  }
}
