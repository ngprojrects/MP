import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import { Title } from '@angular/platform-browser';
import {Router} from '@angular/router';


@Component({
  selector: 'app-mp-myccount',
  templateUrl: './mp-users.component.html',
  styleUrls: ['./mp-users.component.css']
})
export class MpUsersComponent implements OnInit {
  componentTitle: string = 'Merchant Portal Users';
  @Output() subMenuTitle = new EventEmitter<string>();

  constructor( private sharedService: SharedService,
               private titleService: Title,
               private router: Router) { }

  ngOnInit() {
    this.titleService.setTitle(this.componentTitle);
    // this.titleEmitter();
    // this.titleEmitter(this.componentTitle);
  }
  // goToLocation() {
  //   this.router.navigate(['/home/location']);
  // }
  titleEmitter() {
    // this.subMenuTitle.emit(this.componentTitle);
    this.sharedService.emitChange(this.componentTitle);
    // this.router.navigate(['/home/location']);
  }
  

}
