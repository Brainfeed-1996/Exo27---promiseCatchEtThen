//Déclaration d'une promesse
const maPromesse = new Promise((resolve, reject) => {
  // resolve("Promesse resolve");
  reject("promesse en échec");
});

console.log(maPromesse);

maPromesse.then((reponse) => {
  console.log(reponse);
});

maPromesse.catch((erreur) => {
  console.log(erreur);
});
