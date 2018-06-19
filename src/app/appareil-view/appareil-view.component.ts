import { AppareilService } from './../services/appareil.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})

export class AppareilViewComponent implements OnInit, OnDestroy {

  appareils: any[];

  appareilsSubscription: Subscription;

  authStatus: boolean;

  lastUpdate = new Date();

  constructor(private appareilService:AppareilService, private authService: AuthService) { }

  ngOnInit() {
    
    this.appareilsSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilsSubject()

    this.authStatus = this.authService.isAuth;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }

  onSave() {
    this.appareilService.saveAppareilsToServer();
  }

  onFetch() {
    this.appareilService.getAppareilsFromServer();
  }

  ngOnDestroy() {
    this.appareilsSubscription.unsubscribe();
  }

}
