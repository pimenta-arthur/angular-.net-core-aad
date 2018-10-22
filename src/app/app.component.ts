import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyApp';

  constructor(private adalService: AdalService) {
    this.adalService.init(environment.adalConfig);
  }

  ngOnInit() {
    // Handle callback if this is a redirect from Azure
    this.adalService.handleWindowCallback();
  }
}
