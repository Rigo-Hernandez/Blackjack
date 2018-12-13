var suits = ["S", "H","D","C"];
var value = ["King","Ace","2","3","4","5","6","7","8","9","10","Jack","Queen"]
var deck = []
var points = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]
var playerCards =[]
var dealerCards =[]
var playerPoints=0
var dealerPoints=0
var message = document.getElementById("messages")
var dealerPointsDiv = document.getElementById("dealer-points")
var playerPointsDiv = document.getElementById("player-points")

for (var s= 0 ; s < suits.length; s++){
    for (var v = 0 ; v < value.length; v++){
        var card = {}
        card.imageurl= "./images/"+ v + suits[s]+ ".jpg"
        card.points = points[v]
        card.value = value[v]
        card.suit=suits[s]
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
    
    var card2 = deck.pop() 
    
    var card3 = deck.pop()
    
    var card4 = deck.pop()
    
    playerCards.push(card1)
    playerCards.push(card2)
    dealerCards.push(card3)
    dealerCards.push(card4)
    var playerHand = document.getElementById("player-hand")
    var image1 = document.createElement("img")
    var card1img = card1.imageurl
    image1.setAttribute("src", card1img)
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

    playerPoints += card1.points
    playerPoints += card2.points
    dealerPoints += card3.points
    dealerPoints += card4.points
    dealerPointsDiv.textContent=dealerPoints
    playerPointsDiv.textContent=playerPoints
    
    win()
    busted()
    
}
document.getElementById("hit-button").addEventListener("click", hitCards)

function hitCards(){
    var hcard = deck.pop()
    playerCards.push(hcard)
    var playerHand = document.getElementById("player-hand")
    var image1 = document.createElement("img")
    var card1img = hcard.imageurl
    image1.setAttribute("src", card1img)
    playerHand.append(image1)
    playerPoints += hcard.points
    playerPointsDiv.textContent=playerPoints
    win()
    busted()
}
shuffleArray(deck)
document.getElementById("stand-button").addEventListener("click",standCards)

function standCards(){
    while (dealerPoints < 17){
        var hcard = deck.pop()
        dealerCards.push(hcard)
        var dealerHand = document.getElementById("dealer-hand")
        var image1 = document.createElement("img")
        var card5img = hcard.imageurl
        image1.setAttribute("src", card5img)
        dealerHand.append(image1)
        dealerPoints += hcard.points
        dealerPointsDiv.textContent=dealerPoints
    if (dealerPoints >= playerPoints){
            message.textContent = ('Dealer Win, You Lose!!')
    }
    else if (playerPoints >= dealerPoints){
        message.textContent = ('Dealer lose, You Win!!')
    }
        busted()
        win()
    
}
}
function busted(){
    if (playerPoints > 21){
        message.textContent = ('You Busted!')
    } 

    else if (dealerPoints == 21){
        message.textContent = ('Dealer Won')
    }

}
function win(){

    if (dealerPoints > 21){
        message.textContent = ('Dealer Busted, You Win!!')
    }

    else if (playerPoints == 21){
        message.textContent = ("You Win!!")
    }
    
}


