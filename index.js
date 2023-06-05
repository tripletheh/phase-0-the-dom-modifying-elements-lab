const m = document.getElementById("main")
m.remove();
const newHeader = document.createElement("h1");
newHeader.id= "victory"
newHeader.textContent="Harry is the champion"
document.body.append(newHeader);