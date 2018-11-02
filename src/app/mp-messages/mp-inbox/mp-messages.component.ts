import { Component, OnInit } from '@angular/core';
import { GetInboxService } from '../../services/get-inbox.service';
import * as moment from 'moment';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
@Component({
  selector: 'app-mp-messages',
  templateUrl: './mp-messages.component.html',
  styleUrls: ['./mp-messages.component.css']
})
export class MpMessagesComponent implements OnInit {
  messages: any[] = [];
  selectedMessage: any;
  previousIndex: any;
messageInfo:any;
  constructor(public inboxService: GetInboxService) {

  }

  // ProcessMessage(index: any) {
  //   if (index === -1) {
  //     this.selectedMessage.eventTypeName = 'All Messages are deleted.';
  //     this.selectedMessage.message = 'Please wait for new messages...';
  //     return;
  //   }
  //   this.selectedMessage = this.messages[index];
  //   if (this.previousIndex !== undefined && this.messages.length > this.previousIndex) {
  //     this.messages[this.previousIndex].isVisibleMarketplace = false;
  //   }
  //   this.previousIndex = index;
  //   this.selectedMessage.isVisiblePOS = false;
  //   this.selectedMessage.isVisibleMarketplace = true;
  // }



  ProcessMessage(eventId: any) {
    //const url = 'fullURL'+eventId;
    //const url = 'assets/messageInfo.json';
    const url = 'https://us-e-apim.azure-api.net/messagecenter/Message/Inbox/Email/'+eventId;
    this.inboxService.getApiModel(url)
      .subscribe(res => {
        this.messageInfo = JSON.parse(res.values)

      });
  }

  DeleteMessage() {
    if (this.previousIndex !== -1) {
      this.messages.splice(this.previousIndex, 1);
      if (this.previousIndex + 1 !== this.messages.length + 1) {
        this.ProcessMessage(this.previousIndex);
      } else if (this.previousIndex !== this.messages.length + 1) {
        this.ProcessMessage(this.previousIndex - 1);
      }
    }
  }

  ngOnInit() {
    // const url = 'http://get';
    // this.getMessages.getApiModel(url)
    //   .subscribe(res => {

    //   });
    this.getInboxMessages();
    //this.previousIndex = 0;
    // this.ProcessMessage(this.previousIndex);

  }

  getInboxMessages() {
    //const url = 'assets/response.json';
    const url = 'https://us-e-apim.azure-api.net/messagecenter/Message/0/Inbox/101';
    this.inboxService.getApiModel(url)
      .subscribe(res => {
        this.messages = res;
        this.messages.forEach(element => {
          const currentTime: any = moment(new Date());
          const messageTime: any = moment(new Date(element.timeStamp));

          let hours = Math.round((currentTime - messageTime) / 3600000);
          if (hours <= 24) {
            if (hours < 0) {
              hours = -hours;
            }
            element.timeStamp = hours + ' hours ago';
          } else
            if (hours > 24 && hours <= 48) {
              element.timeStamp = 'yesterday';
            } else {
              element.timeStamp = '' + moment(new Date(element.timeStamp)).format('MM/DD/YYYY');
            }
        });
      });
  }




}
