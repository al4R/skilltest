function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("name").text(profile.getName());
    $("email").text(profile.getEmail());
    $(".data").css("display","block");
    $(".g-sigin2").css("display","none");
}
function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){
        alert("logout");
        $(".g-sigin2").css("display","block");
        $(".data").css("display","block");
    })
}