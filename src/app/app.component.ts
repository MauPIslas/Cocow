import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {LoginComponent} from './login/login.component';

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
        // console.log(data.user);
        console.log(data.additionalUserInfo.profile);
        var Uid = data.user.uid
        var googleLink = data.additionalUserInfo.profile.link
        var userPicture = data.additionalUserInfo.profile.picture
        var userName = data.user.displayName
        var userMail= data.user.email
        this.createCW(Uid,userName,userMail,googleLink,userPicture);
        alert('Loggeado exitosamente');
      })
      .catch((error) => {
        console.log(error);
        alert('Hubo un error al loggearte');
      })
  }

  logout (){
    this.authorizationService.logout()
    .then((data)=> {
      console.log(data);
      alert('Hasta luego');
    })
  }






  createCW(Uid,userName,userMail,googleLink,userPicture){
    this.afDB.database.ref('cocow/coworking/' + Uid).set(
  {
    profile : {
      username: userName,
      mail: userMail,
      googleprofile: googleLink,
      picture: userPicture
    }

  });
  }
}
