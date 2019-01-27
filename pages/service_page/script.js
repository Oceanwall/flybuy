var click = true;
function submitFunc()  {
    if (click) {
        click = false;
        var x = document.getElementById("submitbtn");
        x.className += " disabled";
        M.toast({html: 'Feedback Submitted!', displayLength:2000, completeCallback: function(){transfer('landing_page');}});
    }
}