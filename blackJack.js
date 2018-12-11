var suits = ["Spades", "Hearts","Diamonds","Clubs"];
var value = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"]
var deck = []
var points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10 , 10]
var playerCards =[]
var dealerCards =[]



for (var s= 0 ; s < suits.length; s++){
    for (var v = 0 ; v < value.length; v++){
        var card = {}
        card.points = points[v]
        card.value = value[v]
        card.suit=suits[s]
        card.imageurl= "./images/"+ v + (suits[s].charAt(0))+".jpg"
        deck.push(card)
    }
}
console.log(deck)
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

document.getElementById("deal-button").addEventListener("click", dealCards)

function dealCards(){
    var card1 = deck.pop()
    console.log(card1.imageurl)
    var card2 = deck.pop()
    var card3 = deck.pop()
    var card4 = deck.pop()
    playerCards.push(card1)
    playerCards.push(card2)
    dealerCards.push(card3)
    dealerCards.push(card4)
    // console.log(playerCards)
    // console.log(dealerCards)
    var playerHand = document.getElementById("player-hand")
    var image1 = document.createElement("img")
    var card1img = card1.imageurl
    image1.setAttribute("src", card1img)
    console.log(image1)
    playerHand.append(image1)

    var image2 = document.createElement("img")
    var card2img= card2.imageurl
    image2.setAttribute("src",card2img)
    playerHand.append(image2)

    var dealerHand = document.getElementById("dealer-hand")
    var image3 = document.createElement("img")
    var card3img = card3.imageurl
    image3.setAttribute("src",card3img)
    dealerHand.append(image3)

    var image4 = document.createElement("img")
    var card4img = card4.imageurl
    image4.setAttribute("src",card4img)
    dealerHand.append(image4)
    
}
document.getElementById("deal-button").addEventListener("click", hitCards)

function hitCards(){
    var hcard = deck.pop()
    playerCards.push(hcard)
    
}
    
    

shuffleArray(deck)

// console.log(deck)

