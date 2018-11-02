import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { UserManager, User } from 'oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userManager: UserManager;
  private user: User;

  constructor( private httpClient: HttpClient ) {
    const config = {
      authority: 'https://im3sso.azurewebsites.net/',
      client_id: 'native',
      loadUserInfo: true,
      filterProtocolClaims: false,
      redirect_uri: 'http://localhost/logincallback.html',
      automaticSilentRenew: true,
      accessTokenExpiringNotificationTime: 60,
      silent_redirect_uri: window.location.origin + '/signinsilentcallback.html',
      monitorSession: true,
      checkSessionInterval: 2000,
      response_type: 'id_token token',
      scope: 'openid vital_user_profile vital_api_service'
      // needs post l.og ouit redirect
    };

    this.userManager = new UserManager(config);
    this.userManager.getUser().then(user => {
        if (user && !user.expired) {
          this.user = user;
        }
    });
    // var userManager = new Oidc.UserManager(config);
   }
  login(): Promise<any> {
    return this.userManager.signinRedirect();
  }
  logout() {
    return this.userManager.signoutRedirect();
  }
  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired && this.user.access_token != null;
}
  getAccessToken() {
    return this.user ? this.user.access_token : '';
  }
  
}




 

// userManager.events.addUserSignedOut(function () {
//     log("User signed out");
// });
// userManager.getUser().then(function (user) {
//     if (user) {
//         log("User logged in", user.profile);
//     } else {
//         userManager.signinSilent().then(function (user) {
//             log("User signed in silently", user.profile);
//         })
//         .catch(function (err) {
//             // "Frame window timed out" - auth error
//             // "unauthorized_client"
//             // "Network Error"
//             // "login_required"
//             log(err);
//         });
//     }
// });
// function log() {
//     document.getElementById('results').innerText = '';
//     Array.prototype.forEach.call(arguments, function (msg) {
//         if (msg instanceof Error) {
//             msg = "Error: " + msg.message;
//         } else if (typeof msg !== 'string') {
//             msg = JSON.stringify(msg, null, 2);
//         }
//         document.getElementById('results').innerHTML += msg + '\r\n';
//     });
// }

// function api() {
//     userManager.getUser().then(function (user) {
//         var url = "https://localhost:5001/api/values";
//         var xhr = new XMLHttpRequest();
//         xhr.open("GET", url);
//         xhr.onload = function () {
//             log(xhr.status, JSON.parse(xhr.responseText));
//         }
//         xhr.setRequestHeader("Authorization", "Bearer " + user.access_token);
//         xhr.send();
//     });
// }

// function id_token() {
//     log
//     userManager.getUser().then(function (user) {
//         if (user) {
//             alert(user.access_token);
//             alert(user.id_token);
//         } else {
//             alert('nope');
//         }
//     });
// }
// function profile() {
//     userManager.getUser().then(function (user) {
//         if (user) {
//             log("User's profile", user.profile);
//         } else {
//             alert('nope');
//         }
//     });
// }
// function id_token() {
//   userManager.getUser().then(function (user) {
//     if (user) {
//       log("User's id_token", user.id_token);
//     } else {
//       alert('nope');
//     }
//   });
// }
// function access_token() {
//   userManager.getUser().then(function (user) {
//     if (user) {
//       log("User's access_token", user.access_token);
//     } else {
//       alert('nope');
//     }
//   });
// }
// document.getElementById("login").addEventListener("click", login, false);
// document.getElementById("api").addEventListener("click", api, false);
// document.getElementById("logout").addEventListener("click", logout, false);
// document.getElementById("profile").addEventListener("click", profile, false);
// document.getElementById("id_token").addEventListener("click", id_token, false);
// document.getElementById("access_token").addEventListener("click", access_token, false);
