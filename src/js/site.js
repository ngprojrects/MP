var config = {
    authority: "https://im3sso.azurewebsites.net/",
    client_id: "native",
    loadUserInfo: true,
    filterProtocolClaims: false,
    redirect_uri: window.location.origin + "/logincallback.html",
    automaticSilentRenew: true,
    accessTokenExpiringNotificationTime: 60,
    silent_redirect_uri: window.location.origin + "/signinsilentcallback.html",
    monitorSession: true,
    checkSessionInterval: 2000,
    response_type: "id_token token",
    scope: "openid vital_user_profile vital_api_service"
};

var mgr = new Oidc.UserManager(config);

mgr.events.addUserSignedOut(function () {
    log("User signed out");
});

mgr.getUser().then(function (user)
{
    if (!user)
    {
        mgr.signinSilent().then(function (user)
        {
        })
        .catch(function (error)
        {
			switch (error.message) {
			  case 'Network Error':
				log('SSO portal is not available at this time. Please try again. If the issue persists, please contact customer support.');
				break;
			  default:
				mgr.signinRedirect();
			}
        });
    }
});

function log() {
    document.getElementById('results').innerText = '';

    Array.prototype.forEach.call(arguments, function (msg) {
        if (msg instanceof Error) {
            msg = "Error: " + msg.message;
        }
        else if (typeof msg !== 'string') {
            msg = JSON.stringify(msg, null, 2);
        }
        document.getElementById('results').innerHTML += msg + '\r\n';
    });
}

function call_api() {
    mgr.getUser().then(function (user) {
        var url = "https://<api_uri>/<your_query_string>";

        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function () {
            log(xhr.status, JSON.parse(xhr.responseText));
        }
        xhr.setRequestHeader("Authorization", "Bearer " + user.access_token);
        xhr.send();
    });
}

function logout() {
    mgr.signoutRedirect();
}

function view_profile() {
    mgr.getUser().then(function (user) {
        if (user) {
            log("User's profile", user.profile);
        }
        else {
            alert('User object is not defined!');
        }
    });
}

function view_id_token() {
    mgr.getUser().then(function (user) {
        if (user) {
            log("User's id_token", user.id_token);
        }
        else {
            alert('User object is not defined!');
        }
    });
}

function view_access_token() {
    mgr.getUser().then(function (user) {
        if (user) {
            log("User's access_token", user.access_token);
        }
        else {
            alert('User object is not defined!');
        }
    });
}

document.getElementById("call_api").addEventListener("click", call_api, false);
document.getElementById("logout").addEventListener("click", logout, false);
document.getElementById("view_profile").addEventListener("click", view_profile, false);
document.getElementById("view_id_token").addEventListener("click", view_id_token, false);
document.getElementById("view_access_token").addEventListener("click", view_access_token, false);
