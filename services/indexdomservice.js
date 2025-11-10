export function renderUserInfo(portfolio){

    document.getElementById("user-name").textContent = portfolio.userName;
    document.getElementById("user-profession").textContent = portfolio.userProfession;
    document.getElementById("user-photo").textContent = portfolio.userPhoto;
    document.getElementById("user-about").textContent = portfolio.userAbout;

}

export function renderProjects(userProjects){

    const projectContainer = document.getElementById("project-container");
    const projectTemplate = document.getElementById("project-template");

    userProjects.forEach(project => {
        const clone = projectTemplate.content.cloneNode(true);
        clone.querySelector(".project-img").src = project.img;
        clone.querySelector(".project-name").textContent = project.name;
        clone.querySelector(".project-small-about").textContent = project.smallAbout;

        projectContainer.appendChild(clone);
    });

}