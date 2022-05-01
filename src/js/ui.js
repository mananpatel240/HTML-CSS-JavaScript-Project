// Name : Manan Patel
// Student ID : 148603194
// WEB222 Assignment 5
// Date : 2021/04/11

function updateCardsTitle(title) {
  let span = document.getElementById("cards-title");
  let last = span.lastChild;
  span.removeChild(last);
  let text = document.createTextNode(title);
  span.appendChild(text);
}

// Remove all content from the table body element with id=rows
function clearAllCards() {
  document.getElementById("cards").innerHTML = "";
}

// Given a URL src string and alt text string, create an <img> element and return:
// <img src="https://static.inaturalist.org/photos/109319291/square.jpg?1609877680" alt="Muskrat">
function cardImg(url) {
  let url2 = url.replace("square", "medium");
  let style = "background-image: url('" + url2 + "');";
  var div = document.createElement("div");
  div.setAttribute("class", "card-image");
  div.setAttribute("style", style);
  div.innerHTML = "";
  return div;
}

function cardBody(name, date, uri, wikipediaUrl) {
  month = date.getMonth() + 1;
  year = date.getYear() - 100 + 2000;
  date = year + "-" + month + "-" + date.getDate();

  var div = document.createElement("div");
  div.setAttribute("class", "card-body");

  let h3 = document.createElement("h3");
  let a1 = document.createElement("a");
  a1.setAttribute("href", wikipediaUrl);
  let text = document.createTextNode(name);
  a1.appendChild(text);
  h3.appendChild(a1);
  div.appendChild(h3);

  let h4 = document.createElement("h4");
  let a2 = document.createElement("a");
  a2.setAttribute("href", uri);
  let text2 = document.createTextNode(date);
  a2.appendChild(text2);
  h4.appendChild(a2);
  div.appendChild(h4);
  return div;
}

function cardIcons(isNative, isIntroduced, isThreatened, isEndangered) {
  var div = document.createElement("div");
  div.setAttribute("class", "card-icons");

  if (isNative) {
    let i = document.createElement("i");
    i.setAttribute("class", "fas fa-leaf");
    i.setAttribute("title", "Native");
    div.appendChild(i);
  }
  if (isIntroduced) {
    let i = document.createElement("i");
    i.setAttribute("class", "fas fa-frog");
    i.setAttribute("title", "Introduced");
    div.appendChild(i);
  }
  if (isThreatened) {
    let i = document.createElement("i");
    i.setAttribute("class", "fas fa-radiation-alt");
    i.setAttribute("title", "Threatened");
    div.appendChild(i);
  }
  if (isEndangered) {
    let i = document.createElement("i");
    i.setAttribute("class", "fas fa-skull-crossbones");
    i.setAttribute("title", "Endangered");
    div.appendChild(i);
  }
  return div;
}

function buildCardForObservation(observation) {
  card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("id", observation.id);

  card.appendChild(cardImg(observation.photoUrl));
  let cBody = cardBody(
    observation.name,
    observation.date,
    observation.uri,
    observation.wikipediaUrl
  );

  cBody.appendChild(
    cardIcons(
      observation.isNative,
      observation.isIntroduced,
      observation.isThreatened,
      observation.isEndangered
    )
  );
  card.appendChild(cBody);
  return card;
}

function addCard(card) {
  cards = document.getElementById("cards");
  cards.appendChild(card);
}
