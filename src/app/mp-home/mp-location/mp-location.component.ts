import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mp-location',
  templateUrl: './mp-location.component.html',
  styleUrls: ['./mp-location.component.css']
})
export class MpLocationComponent implements OnInit {
  componentTitle: string = 'Location';
  @Output() subMenuTitle = new EventEmitter<string>();

  constructor( private sharedService: SharedService,
               private router: Router) { }

  ngOnInit() {
    this.titleEmitter();
  }
  titleEmitter() {
    // this.subMenuTitle.emit(this.componentTitle);
    this.sharedService.emitChange(this.componentTitle);
  }
  BackUp() {
    this.router.navigate(['/home/my-account']);
  }

}
