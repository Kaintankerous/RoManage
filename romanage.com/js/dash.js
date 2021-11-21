function request(url, method, headers, body, cb) {
  if (method == "GET") {
      fetch(url, {
          method: method,
          headers: headers,
          credentials: "include"
      }).then(response => response.json()).then(json => {
          cb(json)
      });
  } else {
      fetch(url, {
          method: method,
          headers: headers,
          body: body,
          credentials: "include"
      }).then(response => response.json()).then(json => {
          cb(json)
      });
  }
}


window.onload=function(){

  if(document.getElementById("icon-nav-menu")){
document.getElementById("icon-nav-menu").addEventListener("click", function() {
  $('#main-sidebar').toggleClass("nav-show", 100)
  $('#icon-nav-menu').toggleClass("is-opened", 100)
})

  }


  if(document.getElementById("login")){
    document.getElementById("login").addEventListener("click", function() {

      Swal.fire({
        title: 'Login Credentials',
        html: '<input type="text" id="username" class="swal2-input" placeholder="Enter your username"></input>' +
          '<input type="password" id="password" class="swal2-input" placeholder="Enter your password"></input>',
        confirmButtonText: 'Login',
        preConfirm: () => {
          let username = Swal.getPopup().querySelector('#username').value
          let password = Swal.getPopup().querySelector('#password').value
          if (username === '' || password === '') {
            Swal.showValidationMessage(`Username/Password empty`)
          }
          return {username: username, password: password}
        }
      }).then((result) => {


        request("https://api." + window.location.host + "/auth/login", "POST", {
          "Content-Type": "application/json"
      }, JSON.stringify({
          username: result.value.username,
          password: result.value.password,
      }), function(login) {
          if (login.success) {
                      document.location.replace("/dashboard")
          } else {
              swal.fire("Something went wrong", login.reason, "error")
          }
      })
  })
})

  }




  if(document.getElementById("register")){
    document.getElementById("register").addEventListener("click", function() {
      Swal.fire({
        title: 'Register Credentials',
        html: '<input type="text" id="username" class="swal2-input" placeholder="Enter your username"></input>' +
          '<input type="password" id="password" class="swal2-input" placeholder="Enter your password"></input>',
        confirmButtonText: 'Register',
        preConfirm: () => {
          let username = Swal.getPopup().querySelector('#username').value
          let password = Swal.getPopup().querySelector('#password').value
          if (username === '' || password === '') {
            Swal.showValidationMessage(`Username/Password empty`)
          }


          request("https://api." + window.location.host + "/auth/register", "POST", {
            "Content-Type": "application/json"
        }, JSON.stringify({
            username: result.value.username,
            password: result.value.password,
        }), function(register) {
            if (register.success) {
                        document.location.replace("/dashboard")
            } else {
                swal.fire("Something went wrong", register.reason, "error")
            }
        })


          return {username: username, password: password}
        }
      }).then((result) => {
        Swal.fire(`Username: ${result.value.username}\nPassword: ${result.value.password}`)
      })
    })
  }

}


