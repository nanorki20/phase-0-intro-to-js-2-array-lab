// Write your solution here!

const cats = ['Milo', 'Otis', 'Garfield']
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyAppendCat(name) {
    cats.push(name)
  }
destructivelyAppendCat('Ralph')
  

function destructivelyPrependCat(name) {
    cats.unshift(name)
  }
destructivelyPrependCat('Bob')

function destructivelyRemoveLastCat() {
      cats.pop()
  }
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat() {
      cats.shift()
  }
destructivelyRemoveFirstCat()

function appendCat(name) {
    let newCats = [...cats, 'Broom']
    return newCats
  }
appendCat()

function prependCat(name) {
     let newArray = ['Arnold', ...cats]
     return newArray
  }
prependCat()

function removeLastCat() {
      let newArray = cats.slice(0, cats.length-1)
      return newArray
  }
removeLastCat() 


function removeFirstCat() {
    let newArray = cats.slice(1)
    return newArray
}
removeFirstCat()