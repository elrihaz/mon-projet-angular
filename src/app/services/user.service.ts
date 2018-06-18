import { User } from '../models/user.model'
import { Subject } from 'rxjs';


export class UserService {

    private users: User[] = [
        new User('Will', 'Smith', 'will.smith@smith.com', 'Coca', ['coder', 'boire du café'])
    ];

    usersSubject = new Subject<User[]>();
    
    constructor() {}

    emitUsers() {
        this.usersSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }

}