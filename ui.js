class ui {
    getProfile(data) {
        return `<div class="profileDetails">
        <div class="profilePic">
            <img src="${data.avatar_url}" alt="profile image" >
            <button type="submit" class="viewProfile">View Profile</button>
        </div>
        <div class="profileStats">
            <div class="profileFollowers">
                <button type="submit" class="publicRepo" style="background-color: blue; color: white;">Public Repos : ${data.public_repos}</button>
                <button type="submit" class="publicGist" style="background-color: grey; color: white;">Public Gist : ${data.public_gists}</button>
                <button type="submit" class="followers" style="background-color:green; color: white;">Followers : ${data.followers}</button>
                <button type="submit" class="following" style="background-color: darkcyan; color: white;">Following : ${data.following}</button>
            </div>
            <div class="companyName">
                <div class="website">Website : ${data.blog}</div>
                <div class="company" >Company : ${data.company}</div>
                <div class="location" >Location : ${data.location}</div>
                <div class="member" >Member Since : ${data.created_at}</div>
            </div>
        </div>`;
    }
    getAlert() {
        return `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>User Not Found!</strong> try checking the spelling of user you are searching
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    }
    clearAlert() {
        alertDisplay.innerHTML = "";
        let userRepos = document.getElementsByClassName("userRepos")[0];
        userRepos.style.display = "none";
    }
    bindButtons(btnClass, urlToBind) {
        document.getElementsByClassName(btnClass)[0].addEventListener("click", () => { location.href = urlToBind; });
    }
    getRepos(data) {
        let str = "";
        document.getElementsByClassName("userRepos")[0].style.display ="flex"; 
        data.forEach(element => {
            str += `<div class="reposBox">
            <div class="repoName"><a href="${element.html_url}">${element.name}</a></div>
            <button class="repoStat" style="background-color:blue;">Stars :${element.stargazers_count}</button>
            <button class="repoStat" style="background-color:green;">Watchers : ${element.watchers_count}</button>
            <button class="repoStat" style="background-color:#f1d300;">Forks :${element.forks_count}</button>
        </div>`;
        });
        let userRepos = document.getElementsByClassName("userRepos")[0];
        userRepos.innerHTML= str;
    }
}