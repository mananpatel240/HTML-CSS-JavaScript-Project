// Name : Manan Patel
// Student ID : 148603194
// WEB222 Assignment 5
// Date : 2021/04/11

// An instance of our SimpleMap, created below when the window loads.
let map;

function updateMap(observations, map) {
  map.clear();

  observations.forEach(function (o) {
    map.addObservation(o);
  });
}

function updateCards(observations) {
  clearAllCards();

  observations.forEach((observation) => {
    addCard(buildCardForObservation(observation));
  });
}

function showAll() {
  const observations = getAllObservations();

  updateMap(observations, map);
  updateCards(observations);
  updateCardsTitle(`All Species (${observations.length})`);
}

function showOnlyNative() {
  const observations = getAllObservations();
  const native = filterOnlyNative(observations);

  updateMap(native, map);
  updateCards(native);
  updateCardsTitle(`Only Native Species (${native.length})`);
}

function showOnlyIntroduced() {
  const observations = getAllObservations();
  const introduced = filterOnlyIntroduced(observations);

  updateMap(introduced, map);
  updateCards(introduced);
  updateCardsTitle(`Only Introduced Species (${introduced.length})`);
}

function start() {
  map = new SimpleMap("map-container", 43.7955, -79.3496);

  showAll();
  show -
    all.addEventListener("click", function () {
      showAll();
    });
  show -
    native.addEventListener("click", function () {
      showOnlyNative();
    });
  show -
    introduced.addEventListener("click", function () {
      showOnlyIntroduced();
    });
}

// TODO: replace this console.log with the code necessary to call the start
// function when the page has finished fully loading.
console.log(`OK, let's begin!`);
start();
