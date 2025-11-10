export function setText(elementId, text){
    document.getElementById(elementId).textContent = text;
}

export function fillList(elementId, items){
    const list = document.getElementById(elementId);
    list.innerHTML = "";

    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
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