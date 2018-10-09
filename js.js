
document.getElementById('submit').addEventListener('click', function(){
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  var result = ((shoeSize * 2 + 5) * 50 - yearOfBirth) + 1766;
  if (isNaN(shoeSize) || isNaN(yearOfBirth)){
  alert("Vous n'avez pas entré des chiffres");
  } else {
  alert("Le reste du résultat est : " + result);
  }
})
