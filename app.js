let alertDisplay = document.getElementById("alertDisplay");
let myUsers = new findUsers();
document.getElementById("userInput").addEventListener("keyup", () => {
    myUsers.getUsers(document.getElementById("userInput").value).then((data) => {
        // create a object of ui class
        let displayData = new ui();
        let profileDisplay = document.getElementById("profileDisplay");
        // clear the message alert
        displayData.clearAlert();
        // display the ui part
        if (data[0].message != "Not Found") {
            profileDisplay.innerHTML = displayData.getProfile(data[0]);
            displayData.bindButtons("viewProfile", data[0].html_url);
            displayData.getRepos(data[1]);
        }
        // alert if user is not found
        else {
            profileDisplay.innerHTML = "";
            let alert = displayData.getAlert();
            alertDisplay.innerHTML = alert;
        }
    }).catch(err => { throw err });
});