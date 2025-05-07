const selectColor = document.getElementById("colorSelect");
const btn = document.querySelector("input");

function removeIteam() {
  const element = Array.from(selectColor.options).find((option) => {
    return option.value === selectColor.value;
  });

  if (element) {
    selectColor.removeChild(element);
  }

  if (selectColor.options.length === 0) {
    const optionList = document.createElement("option");

    optionList.value = "no items";
    optionList.text = "no items";
    optionList.disabled = true;
    btn.value = "no more iteams";

    selectColor.append(optionList);
  }
}

btn.addEventListener("click", removeIteam);
