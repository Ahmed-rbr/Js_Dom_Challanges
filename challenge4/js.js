const btn = document.querySelector("button");
const ul = document.querySelector("ul");
const link = document.getElementById("w3r");
const creatList = (attributeName, attributeValue) => {
  if (attributeName) {
    const list = document.createElement("li");
    list.textContent = `${attributeName}:${attributeValue}`;
    ul.append(list);
  }
};
const showAttributes = () => {
  ul.innerHTML = "";
  Array.from(link.attributes).forEach((attribute) => {
    creatList(attribute.name, attribute.value);
  });
};

btn.addEventListener("click", showAttributes);
