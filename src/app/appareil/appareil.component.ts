import { AppareilService } from './../services/appareil.service';
import { Component, Input } from '@angular/core';

@Component({
  selector:              'app-appareil',
  templateUrl:           './appareil.component.html',
  styleUrls:             ['./appareil.component.scss']
})
export class AppareilComponent {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() appareilIndex: number;
  @Input() appareilId: number;

  constructor(private appareilService:AppareilService) { }

  

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus==='allumé') {
      return 'green';
    } else if(this.appareilStatus==='éteint') {
      return 'red';
    }
  }

  onSwitch() {
    if(this.appareilStatus==='allumé') {
      this.appareilService.switchOffOne(this.appareilIndex);
    } else if (this.appareilStatus==='éteint') {
      this.appareilService.switchOnOne(this.appareilIndex);
    }
  }

}
