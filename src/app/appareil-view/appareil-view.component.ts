import { AppareilService } from './../services/appareil.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})

export class AppareilViewComponent implements OnInit {

  appareils:any[];

  authStatus: boolean;

  lastUpdate = new Date();

  constructor(private appareilService:AppareilService, private authService: AuthService) { }

  ngOnInit() {
    this.appareils=this.appareilService.appareils;
    this.authStatus = this.authService.isAuth;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }

}
