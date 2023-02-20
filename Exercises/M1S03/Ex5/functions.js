const data = {
    "login": "JEFFERSON300",
    "id": 61527553,
    "node_id": "MDQ6VXNlcjYxNTI3NTUz",
    "avatar_url": "https://avatars.githubusercontent.com/u/61527553?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/JEFFERSON300",
    "html_url": "https://github.com/JEFFERSON300",
    "followers_url": "https://api.github.com/users/JEFFERSON300/followers",
    "following_url": "https://api.github.com/users/JEFFERSON300/following{/other_user}",
    "gists_url": "https://api.github.com/users/JEFFERSON300/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/JEFFERSON300/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/JEFFERSON300/subscriptions",
    "organizations_url": "https://api.github.com/users/JEFFERSON300/orgs",
    "repos_url": "https://api.github.com/users/JEFFERSON300/repos",
    "events_url": "https://api.github.com/users/JEFFERSON300/events{/privacy}",
    "received_events_url": "https://api.github.com/users/JEFFERSON300/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Jefferson Pedro",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "I'm a Student Web Developer.",
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2020-02-27T01:54:50Z",
    "updated_at": "2023-02-04T00:02:18Z"
};

document.getElementById("name").innerHTML = data.name;
document.getElementById("bio").innerHTML = data.bio;
document.getElementById("login").innerHTML = "My Login: "+data.login;
document.getElementById("rep").innerHTML = "Repositórios Públicos: "+data.public_repos;