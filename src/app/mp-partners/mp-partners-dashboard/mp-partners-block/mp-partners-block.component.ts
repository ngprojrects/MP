import { Component, OnInit, Input } from '@angular/core';
import { Block } from 'src/app/models/block';

@Component({
  selector: 'app-partners-block',
  templateUrl: './mp-partners-block.component.html',
  styleUrls: ['./mp-partners-block.component.css']
})
export class MpPartnersBlockComponent implements OnInit {

  constructor() { }
  @Input()
  blockData: Block;
  ngOnInit() {
  }

}
