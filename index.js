function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const nested = document.querySelector('#nested');
  return nested.querySelector('div div div div.target')
}

function deepestChild() {
  const grandNode = document.querySelector('#grand-node')

  let innerDiv = grandNode.querySelector('div');

  while (innerDiv) {

    // If current inner div has no child element, return current div from loop
    if (!innerDiv.querySelector('div')) {
      return innerDiv;
    }
    console.log(`Current div: ${innerDiv}`)
    innerDiv = innerDiv.querySelector('div');
  }
}

function increaseRankBy(n) {
  const rankedListItems = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < rankedListItems.length; i++) {
    let increasedNumber = parseInt(rankedListItems[i].innerHTML) + n
    rankedListItems[i].innerHTML = increasedNumber.toString();
  }
}
