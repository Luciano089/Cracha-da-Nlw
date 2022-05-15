    const linksSocialMedia = {
        github: "Luciano089",
        youtube: "jakelinygracielly",
        facebook: "maykbrito",
        instagram: "luciano_xyz",
        twitter: "jakelinytec"
    }
    
    function changeSocialMediaLinks () {
        for(let li of socialLinks.children )  {
           const social = li.getAttribute('class')

            li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
            
        }
    }
    changeSocialMediaLinks()

    function getGitHubProfileInfos () {
        const url = `https://api.github.com/users/${linksSocialMedia.github}`

        fetch(url)
        .then(Response => Response.json())
        .then(data => {
            userName.textContent = data.name
            UserBio.textContent = data.bio
            userLink.href = data.html_url
            userImage.src = data.avatar_url
            NameGit.textContent = data.login
        })
    }
    getGitHubProfileInfos()

