const URL_API = "https://jsonplaceholder.typicode.com/users";

const items = document.getElementById("items");
const modalInfo = document.getElementById("modal-info");

const fetchData = async (URL_API) => {
  try {
    const res = await fetch(URL_API);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("error fetching data");
  }
};

const printList = async () => {
  const data = await fetchData(URL_API);
  const elementName = await data.map((item) => {
    const elementLi = document.createElement("button");
    elementLi.classList.add(
      "col-md-5",
      "btn",
      "btn-transparent",
      "mx-0.5",
      "my-2",
      "mx-2",
      "border",
      "border-info"
    );
    elementLi.innerHTML = item.name;
    elementLi.setAttribute("data-bs-toggle", "modal");
    elementLi.setAttribute("data-bs-target", "#myModal");
    elementLi.addEventListener("click", () => showInfo(item.id));
    items.appendChild(elementLi);
  });
};

const showInfo = async (id) => {
  const urlOneUser = `${URL_API}/${id}`;
  const oneUserInfo = await fetchData(urlOneUser);
  const infoPersonDiv = document.createElement("div");
  clearBox("modal-info");

  infoPersonDiv.innerHTML = ` 
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${oneUserInfo.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <p> Company name: ${oneUserInfo.company.name}</p>
        <p> email: ${oneUserInfo.email}</p>
        <p> phone: ${oneUserInfo.phone}</p>
        <p> website: ${oneUserInfo.website}</p>
    </div> `;

  modalInfo.appendChild(infoPersonDiv);
};

function clearBox(elementID) {
  let div = document.getElementById(elementID);

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

document.addEventListener("DOMContentLoaded", printList, false);
