var suits = ["Spades", "Hearts","Diamonds","Clubs"];
var value = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"]
var deck = []

var playerHand = document.getElementById("player-hand")
var image = document.createElement("img")
image.setAttribute("src","images/2H.jpg")
playerHand.append(image)

for (var s= 0 ; s < suits.length; s++){
    for (var v = 0 ; v < value.length; v++){
        var card = {}
        card.points = v
        card.suit=s
        card.imageurl= "/images/"+ v + (suits[s].charAt(0))+".jpg"
        deck.push(card)
    }
}
console.log(deck)


