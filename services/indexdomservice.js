export function renderUserInfo(userInfo){

    document.getElementById("user-name").textContent = userInfo.name;
    document.getElementById("user-profession").textContent = userInfo.profession;
    document.getElementById("user-photo").textContent = userInfo.photo;
    document.getElementById("user-about").textContent = userInfo.about;

}

export function renderProjects(userProjects){

    const projectContainer = document.getElementById("project-container");
    const projectTemplate = document.getElementById("project-template");

    userProjects.forEach(project => {
        const clone = projectTemplate.content.cloneNode(true);
        clone.querySelector(".project-img").src = project.img;
        clone.querySelector(".project-name").textContent = project.name;
        clone.querySelector(".project-about").textContent = project.about;

        projectContainer.appendChild(clone);
    });

}