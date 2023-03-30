const users = [
  {
    id: 1,
    name: "John",
    surname: "Doe",
    description: "A software engineer with 5 years of experience.",
  },
  {
    id: 2,
    name: "Jane",
    surname: "Doe",
    description: "A marketing specialist with expertise in social media.",
  },
  {
    id: 3,
    name: "David",
    surname: "Smith",
    description: "An accountant with experience in financial analysis.",
  },
  {
    id: 4,
    name: "Sarah",
    surname: "Johnson",
    description: "A graphic designer with a passion for typography.",
  },
  {
    id: 5,
    name: "Michael",
    surname: "Brown",
    description: "A project manager with experience in Agile methodologies.",
  },
  {
    id: 6,
    name: "Jennifer",
    surname: "Lee",
    description: "A UX designer with expertise in user research and testing.",
  },
];

const userListContainer = document.querySelector(".user-list-container");

const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal-title");
const modalDescription = document.querySelector(".modal-description");
const buttonClose = document.querySelector(".close");

window.addEventListener("load", () => {
  users.forEach(({ id, name, surname, description }) => {
    let listItem = document.createElement("div");
    listItem.classList.add("user-list-item");

    let userImage = document.createElement("img");
    userImage.classList.add("user-avatar");
    userImage.src = `./assets/avatar${id}.png`;

    let userName = document.createElement("span");
    userName.classList.add("user-name");
    userName.textContent = `${name} ${surname}`;

    listItem.appendChild(userImage);
    listItem.appendChild(userName);

    userListContainer.appendChild(listItem);

    listItem.addEventListener("click", () => {
      showModal(name + " " + surname, description);
    });
  });
});

const showModal = (fullName, description) => {
  modalTitle.textContent = fullName;
  modalDescription.textContent = description;
  modal.style.display = "flex";

  buttonClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (event) => {
    if (event.target !== modal) return;

    modal.style.display = "none";
  });
};
