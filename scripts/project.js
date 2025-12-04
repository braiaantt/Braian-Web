import { setText, fillList, renderTechnologies } from "../services/domservice.js";

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id")

document.addEventListener("DOMContentLoaded", () => {
    fetch(`http://127.0.0.1:8000/project/${projectId}`)
    .then(response => response.json())
    .then(data =>{

        const featStrings = data.feats.map(f => f.feat);
        const infoStrings = data.technical_info.map(i => i.info);

        setText("project-name", data.name);
        setText("about-text", data.big_about);
        fillList("features-list", featStrings);
        renderTechnologies(data.techs);
        fillList("tech-info-list", infoStrings);
        setText("user-comment", data.user_comment);

    })
    .catch(error => console.log("Error al obtener los datos: ", error));
})