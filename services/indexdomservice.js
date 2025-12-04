export function renderUserInfo(portfolio){

    document.getElementById("user-name").textContent = portfolio.user_name;
    document.getElementById("user-profession").textContent = portfolio.user_profession;
    document.getElementById("user-photo").src = "http://127.0.0.1:8000" + portfolio.user_photo;
    document.getElementById("user-about").textContent = portfolio.user_about;

}

export function renderProjects(userProjects){

    const projectContainer = document.getElementById("project-container");
    const projectTemplate = document.getElementById("project-template");

    userProjects.forEach(project => {
        const clone = projectTemplate.content.cloneNode(true);
        clone.querySelector(".project-item").dataset.projectId = project.id
        clone.querySelector(".project-img").src = "http://127.0.0.1:8000" + project.cover_src;
        clone.querySelector(".project-name").textContent = project.name;
        clone.querySelector(".project-small-about").textContent = project.small_about;

        projectContainer.appendChild(clone);
    });

}