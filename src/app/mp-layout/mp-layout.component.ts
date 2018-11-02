import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-mp-layout',
  templateUrl: './mp-layout.component.html',
  styleUrls: ['./mp-layout.component.css']
})
export class MpLayoutComponent implements OnInit {
  isSideBarCollapsed = true;
  isDisplayed = true;
  subMenuTitle: string;

  constructor( private authService: AuthService,
               private sharedService: SharedService ) {
                sharedService.changeEmitted$.subscribe(
                 subMenuTitle => { console.log(subMenuTitle);
                 this.subMenuTitle = subMenuTitle; }
    );
  }

  ngOnInit() {
  }

  collapseSideBar() {
    console.log(this.isSideBarCollapsed );
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
    this.isDisplayed = !this.isDisplayed;

  }
  Login() {
    this.authService.login();
  }
  Logout() {
    this.authService.logout();
  }
  isLoggedIn() {
    this.authService.isLoggedIn();
  }

}
