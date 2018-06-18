import { Subject } from "rxjs";

export class AppareilService {

    appareilsSubject = new Subject<any[]>();
    
    private appareils = [
        {
            id: 1,
            name: 'Machine à laver',
            status: 'éteint'
        },
        {
            id: 2,
            name: 'Frigo',
            status: 'allumé'
        },
        {
            id: 3,
            name: 'Ordinateur',
            status: 'éteint'
        }
    ];

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
        nvAppareil.id = this.appareils[this.appareils.length - 1].id + 1;
        this.appareils.push(nvAppareil);
        this.emitAppareilsSubject();
    }

}