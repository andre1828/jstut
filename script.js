(function () {
  'use strict';

  window.minhaVariavel = undefined;
  watch(window, 'minhaVariavel', reactVariaveisSection);

  window.meuArray = undefined;
  watch(window, 'meuArray', reactArraysSection);

  window.novoArray = [];
  watch(window, 'novoArray', arrayPushReaction);


  function reactVariaveisSection() {
    console.log('%c Boa! parece que voce conseguiu, vamos para o proximo passo','color: green; font-family : monospace' );
    unwatch(window, 'minhaVariavel', reactVariaveisSection);
    // var varCreationReaction = document.getElementById('var-creation-reaction');

    // varCreationReaction.style.display = 'inline';
  }

  function reactArraysSection() {
    console.log('%c Isso mesmo ! vamos prosseguir', 'color: green; font-family : monospace') ;
    unwatch(window, 'meuArray', reactArraysSection);

    // var arrayCreationReaction = document.getElementById('array-creation-reaction');

    // arrayCreationReaction.innerHTML = 'Isso ! voce criou um array com os valores: ' + meuArray;

    // arrayCreationReaction.removeAttribute('hidden');

  }

  function arrayPushReaction(){
    if(novoArray.length === 0) return;
    console.log('%c Exatamente ! podemos ir para o proximo passo', 'color: green; font-family : monospace') ;
    unwatch(window, 'novoArray', arrayPushReaction);
    // var arrayPushReaction = document.getElementById('array-push-reaction')
  }

})();
