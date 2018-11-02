import {Directive, Input, OnChanges, HostBinding} from '@angular/core';

 enum CardType { VISA = 'visa', MASTERCARD = 'mastercard', AMERICAN_EXPRESS = 'american-express', UNKNOWN = 'unknown'}

@Directive({
  selector: '[icon]'
})
export class IconDirective implements OnChanges {


  @HostBinding('src')
  imageSource;

  @Input()
  icon: string;

  ngOnChanges() {
    this.imageSource = 'assets/card-types/' + this.getCardTypeFromNumber() + '.png';
  }

  getCardTypeFromNumber(): CardType {
    if (this.icon) {
      if (this.icon.startsWith('37')) {
        return CardType.AMERICAN_EXPRESS;
      } else if (this.icon.startsWith('4')) {
        return CardType.VISA;
      } else if (this.icon.startsWith('5')) {
        return CardType.MASTERCARD;
      }
    }
    return CardType.UNKNOWN;
  }

}
