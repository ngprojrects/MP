import { Component, OnInit } from '@angular/core';
import { ReportSummaryService } from 'src/app/services/report-summary.service';

@Component({
  selector: 'app-mp-dashboard',
  templateUrl: './mp-dashboard.component.html',
  styleUrls: ['./mp-dashboard.component.css']
})
export class MpDashboardComponent implements OnInit {

  constructor( private  reportSummaryService: ReportSummaryService) { }

  ngOnInit() {
  }
  getReport() {
    this.reportSummaryService.getReport()
        .subscribe( response => {
          console.log('RESPONSE from Summary Report', response );
 
          }
        );

  }

}
