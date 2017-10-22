import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';

  coworking: Observable<any[]>;

  constructor(public afDB: AngularFireDatabase, private authorizationService: AuthService) {
    this.coworking = afDB.list('Cocow').valueChanges();
  }







  login() {
    this.authorizationService.login()
      .then((data) => {
        console.log(data);
        console.log(data.user);
        console.log(data.user.displayName)
        var userName = data.user.displayName
        var userMail= data.user.email
        this.createCW(userName,userMail);
        alert('Loggeado exitosamente');
      })
      .catch((error) => {
        console.log(error);
        alert('Hubo un error al loggearte');
      })
  }
  createCW(userName, userMail){
    this.afDB.database.ref('cocow/users/').set({
    username: userName,
    email: userMail,
    // profile_picture : imageUrl
  });
  }
}
