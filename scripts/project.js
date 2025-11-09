import { setText, fillList, renderTechnologies } from "../services/domservice.js";

document.addEventListener("DOMContentLoaded", () => {
    fetch("mock/project.json")
    .then(response => response.json())
    .then(data =>{

        setText("about-text", data.about);
        fillList("features-list", data.features, "feat");
        renderTechnologies(data.techs);
        fillList("tech-info-list", data.techInfo, "info");
        setText("user-comment", data.userComment);

    })
    .catch(error => console.log("Error al obtener los datos: ", error));
})