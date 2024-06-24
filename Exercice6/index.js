// Fonction pour afficher un caractère sur l'écran
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  // Fonction pour effacer l'écran
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  // Fonction pour calculer le résultat
  function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.value;
  
    // Évaluer l'expression et afficher le résultat
    try {
      display.value = eval(expression);
    } catch (error) {
      alert('Erreur de calcul. Veuillez saisir une expression valide.');
    }
  }
  