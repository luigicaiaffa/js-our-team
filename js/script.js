const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// # Funzioni

// variabile testo stampa
let singleCardHtml = ``;

// funzione che crea il contenuto delle card
const cardsContent = (name, role, email, img) => {
  return (singleCardHtml = ` 
  <div class="col">
    <div class="card bg-black text-white p-0">
      <div class="row g-0">
        <div class="col-4">
          <img
            src="./${img}"
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
  </div>`);
};

// funzione che stampa il contenuto in html
const stampCardsInHtml = (listOfMembers, containerHtml) => {
  // variabile contenuto finale
  let cardsHtml = ``;

  // PER OGNI membro della lista
  listOfMembers.forEach((currentMember) => {
    const { name, role, email, img } = currentMember;
    cardsHtml += cardsContent(name, role, email, img);
  });

  containerHtml.innerHTML = cardsHtml;
};

// recupero elementi html
const cardsContainer = document.getElementById("team-cards-box");

stampCardsInHtml(teamMembers, cardsContainer);
