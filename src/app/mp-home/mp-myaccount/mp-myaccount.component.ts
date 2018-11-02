import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-mp-myccount',
  templateUrl: './mp-myaccount.component.html',
  styleUrls: ['./mp-myaccount.component.css']
})
export class MpMyAccountComponent implements OnInit {
  componentTitle: string = 'Account';
  @Output() subMenuTitle = new EventEmitter<string>();

  constructor( private sharedService: SharedService,
               private router: Router) { }

  ngOnInit() {
    this.titleEmitter();
    // this.titleEmitter(this.componentTitle);
  }
  goToLocation() {
    this.router.navigate(['/home/location']);
  }
  titleEmitter() {
    // this.subMenuTitle.emit(this.componentTitle);
    this.sharedService.emitChange(this.componentTitle);
    // this.router.navigate(['/home/location']);
  }

}
