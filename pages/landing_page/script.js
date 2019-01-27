const swal = require('sweetalert');

window.onload = function() {
  document.getElementById("switch").onclick = function() {
    if (document.getElementById("checkbox").disabled) {
      // DOn't do anything
      console.log("disabled");
    }
    else {
      setTimeout(function () {
        document.getElementById("checkbox").disabled = true;
        swal("An attendant has been called, and will be there shortly!", {
          title: "Attendant Call Notification",
          buttons: ["Undo call", "Gotcha!"],
        })
        .then((value) => {
          console.log(value);
          if (value == null) {
            document.getElementById("checkbox").disabled = false;

            swal("Your attendant call has been canceled!", {
              button: "Thanks!",
            });
          }
          else if (value) {
            setTimeout(function () {
              document.getElementById("checkbox").disabled = false;
              swal("Your attendant has arrived!", {
                icon: "success",
                button: "Thanks!",
              });
            }, 3000);
          }
        });
      }, 800);
    }

  }
}

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
