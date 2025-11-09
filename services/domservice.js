export function setText(elementId, text){
    document.getElementById(elementId).textContent = text;
}

export function fillList(elementId, items, key){
    const list = document.getElementById(elementId);
    list.innerHTML = "";

    items.forEach(obj => {
        const li = document.createElement("li");
        li.textContent = key ? obj[key] : obj;
        list.appendChild(li);
    });

}

export function renderTechnologies(userTechs){

    const techContainer = document.getElementById("tech-container");
    const techTemplate = document.getElementById("tech-template");

    userTechs.forEach(tech => {
        const clone = techTemplate.content.cloneNode(true);
        clone.querySelector(".tech-img").src = tech.icon;
        clone.querySelector(".tech-name").textContent= tech.name;
        
        techContainer.appendChild(clone);
    });

}