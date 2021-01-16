class findUsers {
    constructor() {
        this.client_id = "enter the api key";
        this.client_secrets = "enter the api key";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }
    async getUsers(users) {
        let url1 = `https://api.github.com/users/${users}?client_id=${this.client_id}&client_secret=${this.client_secrets}`;
        let url2 = `https://api.github.com/users/${users}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secrets}`;
        let userResponse = await fetch(url1);
        let userProfile = await userResponse.json();
        let userResponse2 = await fetch(url2);
        let userProfile2 = await userResponse2.json();
        return [userProfile,userProfile2];
    }
}