import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AppareilService {

    appareilsSubject = new Subject<any[]>();
    
    private appareils = [];

    constructor( private httpClient:HttpClient ) {}

    saveAppareilsToServer() {
        this.httpClient
        .put('https://appareils-a1ee2.firebaseio.com/appareils.json', this.appareils)
        .subscribe(
            () => {
                console.log('Enregistrement terminé !');
            },
            (error) => {
                console.log('Erreur ! : ' + error);
            }
        );
    }
    
    getAppareilsFromServer() {
        this.httpClient
        .get<any[]>('https://appareils-a1ee2.firebaseio.com//appareils.json')
        .subscribe(
            (response) => {
                this.appareils = response;
                this.emitAppareilsSubject();
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
        );
    }

    emitAppareilsSubject() {
        this.appareilsSubject.next(this.appareils.slice());
    }

    switchOnAll(){
        for(let appareil of this.appareils) {
            appareil.status='allumé';
        }
        this.emitAppareilsSubject();
    }

    switchOffAll(){
        for(let appareil of this.appareils){
            appareil.status='éteint';
        }
        this.emitAppareilsSubject();
    }

    switchOnOne(index:number){
        this.appareils[index].status='allumé';
        this.emitAppareilsSubject();
    }

    switchOffOne(index:number){
        this.appareils[index].status='éteint';
        this.emitAppareilsSubject();
    }

    getAppareilById(id:number) {
        const appareil = this.appareils.find(
            (item)=> {
                return item.id === id;
            }
        );
        return appareil;
    }

    addAppareil(name:string, status:string) {
        const nvAppareil = {
            id: 0,
            name: '',
            status: ''
        };
        nvAppareil.name = name;
        nvAppareil.status = status;
        if(this.appareils.length > 0) {
            nvAppareil.id = this.appareils[this.appareils.length - 1].id + 1;
        } else {
            nvAppareil.id = 0;
        }
        this.appareils.push(nvAppareil);
        this.emitAppareilsSubject();
    }

}