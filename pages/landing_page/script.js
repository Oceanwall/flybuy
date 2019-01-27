const swal = require('sweetalert');
const fs = require('fs');

window.onload = function() {

  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);

  document.getElementById("selecto").onchange = function() {
    console.log(document.getElementById("selecto").value);
  }

  let clicked = false;
  document.getElementById("switch").onclick = function() {
    if (clicked) return;
    clicked = true;
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
              document.getElementById('checkbox').click();
            }, 3000);
          }
        });
      }, 800);
    }

  }

  fs.readFile('data/persistence.txt', 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    }
    document.getElementById("nameTitle").innerHTML = 'Hello, ' + data.toString().split('\n')[0];
  });

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
