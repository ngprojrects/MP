import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../../services/shared.service';


@Component({
  selector: 'app-mp-sidebar',
  templateUrl: './mp-sidebar.component.html',
  styleUrls: ['./mp-sidebar.component.css']
})
export class MpSidebarComponent implements OnInit {
  isButtonActive: boolean = false;

  butonColor: string;
  subMenuTitle: string = 'Account';

  @Input() isCollapsed: boolean;


  constructor(private sharedService: SharedService) {
    sharedService.changeEmitted$.subscribe(
      subMenuTitle => {
        console.log('inside sidebar', subMenuTitle);
        this.subMenuTitle = subMenuTitle;
      }
    );
  }

  ngOnInit() {
    // console.log(this.isCollapsed)
  }


  collapseBar() {

  }
  collapseBarFromSubmenu() {
    this.isCollapsed = true;
  }

  addClass(buttonName) {
    // console.log(buttonName)

    switch (buttonName) {
      case 'home':
        this.butonColor = 'home';
        break;
      case 'messages':
        this.butonColor = 'messages';
        break;
      case 'partners':
        this.butonColor = 'partners';
        break;
      case 'reports':
        this.butonColor = 'reports';
        break;
      case 'pointofsale':
        this.butonColor = 'pointofsale';
        break;
      case 'market':
        this.butonColor = 'market';
        break;
      case 'help':
        this.butonColor = 'help';
        break;
      default:
        this.butonColor = '';

    }
    // case buttonName
    // this.isButtonActive = !this.isButtonActive;
  }

}
