
$(document).ready( () => {

    // online status checker
    let onlineCheck = document.querySelector('.online-check');

    // login variables
    let loginBtn = document.querySelector('#login');
    

    // registration variables
    let registerBtn = document.querySelector('#registerBtn');
    
    // user login
    // loginBtn.click( () => {
    loginBtn.addEventListener('click', () => {

        let loginEmail = document.querySelector('#loginEmail').value;
        let loginPassword = document.querySelector('#loginPassword').value;

        console.log(loginPassword)

        console.log(loginEmail);
        if (navigator.onLine == 1) {

            let xhr = new XMLHttpRequest();
            let url = serverpath+'login';
            let OK = false;
            xhr.onreadystatechange = function() {
                
                if (this.readyState === 4 && this.status === 200){
                    // console.log(this.responseText);
                    localStorage.userObj = this.responseText;
                    //let gpiResponse = JSON.parse(this.responseText);
                    //console.log(gpiResponse);
                    //console.log(gpiResponse.data.User);
                    // console.log(this.responseText);
                    window.location.href = '../dashboard';
                } else if (this.readyState === 4 && this.status === 0) {
                    alert("Backend server down");
                    //window.location = "../logout";
                } else if (this.status === 401) {
                    alert("Please check your credential and try again!");
                    //window.location = "../logout";
                }

            };
            xhr.open("POST", url, true);
            xhr.send(JSON.stringify({email: loginEmail, password: loginPassword}));
            //xhr.send(JSON.stringify({ password: 'kingstarr', email: 'kingsley.ifedayo@my-gpi.io' }));

        } else {
            // if the browser is offline, display offline message
            let showBadNet = () => {
                onlineCheck.style.top = '3rem';
            }

            let hideBadNet = () => {
                onlineCheck.style.top = '-5rem';
            }

            setTimeout(showBadNet, 500);
            setTimeout(hideBadNet, 4000); 
        }
    })
    // end of user login

    registerBtn.addEventListener('click', () => {
        let personName = document.querySelector('#name').value;
        let registrationEmail = document.querySelector('#email').value;
        let phone = document.querySelector('#phone').value;
        let gender = document.querySelector('#gender').value;
        let userAddress = document.querySelector('#address').value;
        // let regPassword = document.querySelector('#regPassword');
        let regPassword = $('#regPassword');


        if (navigator.onLine == 1){

            // console.log();

            let xhr = new XMLHttpRequest();
            let url = serverpath+'register';
            xhr.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200){
                    console.log(this.responseText);
                    let gpiResponse = JSON.parse(this.responseText);
                    console.log(gpiResponse);

                    window.location.href = '../login'; 
                } else if (this.readyState === 4 && this.status === 0) {
                    alert("Backend server down");
                    window.location = "../logout";
                } else if (this.status === 401) {
                    alert("Operation not Authorized!");
                    //window.location = "../logout";
                } else if (this.status === 400) {
                    alert("Email Taken! Kindly use another email address and try again!");
                }
            };
            xhr.open("POST", url, true);
            xhr.send(JSON.stringify({
                name: personName,
                email: registrationEmail,
                password: regPassword.val(),
                no_tlpn: phone,
                gender: gender,
                address: userAddress,
                role: 'user',

            }));
            
        } else {
            let showBadNet = () => {
                onlineCheck.style.top = '3rem';
            }

            let hideBadNet = () => {
                onlineCheck.style.top = '-5rem';
            }

            setTimeout(showBadNet, 500);
            setTimeout(hideBadNet, 4000); 
        }
    })

});

// function loadDocm() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             // document.getElementById("demo").innerHTML = this.responseText;

//             console.log(this.responseText)
//         }
//     };
//     xhttp.open("POST", "http://appserver.my-gpi.com:5791/login", true);
//     //xhttp.setRequestHeader("Content-type", "application/json;");
//     //xhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
//     //xhttp.setRequestHeader("Authorization", "Bearer the_super_secret_key");
//     // xhttp.send(JSON.stringify({ password: 'kingstarr', email: 'kingsley.ifedayo@my-gpi.io' }));
//     xhttp.send(JSON.stringify({ password: 'kingstarr', email: 'kingsley.ifedayo@my-gpi.io' }));
// }

// loadDocm();