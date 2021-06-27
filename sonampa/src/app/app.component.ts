import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sonampa';


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  isActive(): string {
    return this.router.url;
  }

}
