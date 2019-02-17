import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor() { }

public users = [
  {
    username: 'super@super.com',
    password: 'test123'
  },
  {
    username: 'stameni@stameni.com',
    password: '123test'
  }
];

login(body): Observable<any> {
  return new Observable(
    observer => {
      const username = body.username;
      const password = body.password;
      const _user = this.users.filter(user => user.username === username)[0];
      if(!_user){
        observer.error({
          error:'User not found'
        });
      }if(_user.password === password) {
        observer.next({
          token: 'Stefan431aghugoHOHjasfjojuUJOf'
        });
      }else {
        observer.error({
          error: 'Wrong password!'
        });
      }
      observer.complete();
    }
  );
}

}
