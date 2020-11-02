 
        // $(document).ready( () => {
            
        //     let bbtn = $('#enter');
        //     bbtn.click( ()=> {
        //         // console.log('wow');
              
        //         let xhttp
        //         let server = 'https://appserver.my-gpi.com';
        //         let port = 5791
        //         let gURL = server+':'+port+'/user';
        //         let gURL2 = 'https://jsonplaceholder.typicode.com/todos/';
        //         if (window.XMLHttpRequest) {
        //             xhttp = new XMLHttpRequest();
        //         } else {
        //             xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        //         }
                

        //         xhttp.onreadystatechange = () => {
        //             // console.log(this.Response);
        //             if(this.readyState == 4 && this.status == 200){
        //                 console.log(status);
        //             }
                    
        //         }
        //         xhttp.open('GET', gURL2 , true);
        //         xhttp.send();
        //     })
        // });

        let serverpath = "http://localhost:5791/"
        let imagepath = serverpath+"images/";

        var url = imagepath + 'king.jpg';
        var image = new Image();
        image.id = "connectimg";
        image.name = "connectimg";
        image.src = url;
        //document.body.appendChild(image);

        image.onload = function()
        {
        //alert("Server is up!");
        }

        image.onerror = function()
        {
                alert("Server is down!");
                window.location = "../";
        }

        $("#"+image.id).remove();