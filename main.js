let createBtn = document.querySelector(".nav__create");
let deleteBtn = document.querySelector(".nav__delete");
let container = document.querySelector(".header__container");

createBtn.addEventListener("click", () => {
  container.innerHTML = "";
  someArr.forEach((people) => {
    let wrapper = document.createElement("ul");
    wrapper.setAttribute("data-id", people.id);
    wrapper.classList.add("wrapper");
    container.appendChild(wrapper);

    let image = document.createElement("li");
    image.classList.add("wrapper__img");
    // image.innerHTML = `<img src="${people.avatar}" alt="">`;
    wrapper.appendChild(image);

    let img = document.createElement("img");
    img.setAttribute("src", people.avatar);
    img.classList.add("image")
    image.append(img);

    let firstName = document.createElement("li");
    firstName.classList.add("wrapper__name");
    firstName.textContent = people.name;
    wrapper.appendChild(firstName);
  });
});

deleteBtn.addEventListener("click", () => {
  container.innerHTML = "";
});
