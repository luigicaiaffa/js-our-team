const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "female3.png",
  },
];

// # FUNZIONI

/** Funzione che crea il contenuto della card
 *
 * @param {*} name nome
 * @param {*} role ruolo
 * @param {*} email email
 * @param {*} img immagine
 * @returns
 */
const cardsContent = (name, role, email, img) => {
  return ` 
  <div class="col">
    <div class="card bg-black text-white p-0">
      <div class="row g-0">
        <div class="col-4">
          <img
            src="./img/${img}"
            class="img-fluid rounded-start"
            alt="${name}"
          />
        </div>
        
        <div class="col-8">
          <div class="card-body">
            <h5>${name.toUpperCase()}</h5>
            <h6>${role}</h6>
            <a href="mailto:${email}">${email}</a>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};

/** Funzione che stampa il contenuto in Html
 *
 * @param {*} listOfMembers lista di oggetti
 * @param {*} containerHtml elemento Html in cui stampare
 */
const stampCardsInHtml = (listOfMembers, containerHtml) => {
  // variabile contenuto finale
  let cardsHtml = ``;

  // PER OGNI membro della lista
  listOfMembers.forEach((currentMember) => {
    // prendine i parametri
    const { name, role, email, img } = currentMember;
    // crea le card usando la funzione "cardsContent"
    cardsHtml += cardsContent(name, role, email, img);
  });

  // stampa in pagina
  containerHtml.innerHTML = cardsHtml;
};

/** Funzione che recupera valori inseriti nel form
 *
 * @param {*} listOfMembers lista di oggetti
 */
const newMemberValue = (listOfMembers) => {
  // recupero valori inseriti dall'utente
  const name = inputName.value;
  const role = inputRole.value;
  const email = inputMail.value;
  const img = inputImage.value;

  // li inserisco in un oggetto che inserisco nella lista dei membri
  listOfMembers.push({ name, role, email, img });
};

/** Funzione che svuota il form
 *
 */
const cancFormValue = () => {
  inputName.value = "";
  inputRole.value = "";
  inputMail.value = "";
  inputImage.value = "";
};

// # RECUPERO ELEMENTI HTML
const cardsContainer = document.getElementById("team-cards-box");
const inputName = document.getElementById("input-name");
const inputRole = document.getElementById("input-role");
const inputMail = document.getElementById("input-mail");
const inputImage = document.getElementById("input-img");
const inputButton = document.getElementById("input-button");

// # OUTPUT
stampCardsInHtml(teamMembers, cardsContainer);

inputButton.addEventListener("click", () => {
  newMemberValue(teamMembers);
  stampCardsInHtml(teamMembers, cardsContainer);
  cancFormValue();
});
