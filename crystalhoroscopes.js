$(document).ready(function() {

let horoscopes = ["a gentle, sweet wind is on its way to you", "bathe yourself in rose water and the day will be yours", "sleep with your head to the sun and bright things will shine throughout your week", "your family and friends value your thoughts and abilities just as they are", "on wednesday a puppy will lick your toes", "tomorrow you will wake up to birdsong and you will be happy to hear it", "there are only sweet dreams in store for you these upcoming nights", "when you are in trouble, howl at the moon, and your brethren will come to your aid", "the god of the ocean, who resides deep within the earth's core has winked at you. you are blessed", "aliens on planet Riva saw you through a telescope and went 'wow!'",
"sleep gently tonight. you're troubles are on it's way out", "someone loves you secretly", "the thing you worry about is becoming weaker than you. soon it will shrivel and disappear", "the moon queen is sending a message to you. listen ", "a witch somehwere loves you", "the next time it rains you will have an umbrella", "the next time you see a feather, take it. it is actually an mermaid's scale blown from the ocean", "a man with wings will approach you in a deli. take what he has to offer ", "a homeless woman with a green coat will ask for change. she will give you something treasured in return", "something bizarre and lucky will happen to one of your bills", "your childhood home is doing just fine", "you will go swimming soon",
"do not make that contract"
]
//these are functions that will render horoscopes onclick
$('#aries').click(function(event) {
  let randomNum = Math.floor(Math.random() * (horoscopes.length));
  $('#paries').text(horoscopes[randomNum]);
});


$('#aquarius').click(function(event) {
  let randomNum = Math.floor(Math.random() * (horoscopes.length));
  $('#paquarius').text(horoscopes[randomNum]);
});
$('#gemini').click(function(event) {
  let randomNum = Math.floor(Math.random() * (horoscopes.length));
  $('#pgemini').text(horoscopes[randomNum]);
});

$('#libra').click(function(event) {
  let randomNum = Math.floor(Math.random() * (horoscopes.length));
  $('#plibra').text(horoscopes[randomNum]);
});

$('#pisces').click(function(event) {
  let randomNum = Math.floor(Math.random() * (horoscopes.length));
  $('#ppisces').text(horoscopes[randomNum]);
});

$('#sagittarius').click(function(event) {
  let randomNum = Math.floor(Math.random() * (horoscopes.length));
  $('#psagittarius').text(horoscopes[randomNum]);
});

$('#virgo').click(function(event) {
  let randomNum = Math.floor(Math.random() * (horoscopes.length));
  $('#pvirgo').text(horoscopes[randomNum]);
});

$('#leo').click(function(event) {
  let randomNum = Math.floor(Math.random() * (horoscopes.length));
  $('#pleo').text(horoscopes[randomNum]);
});
$('#cancer').click(function(event) {
  let randomNum = Math.floor(Math.random() * (horoscopes.length));
  $('#pcancer').text(horoscopes[randomNum]);
});
$('#capricorn').click(function(event) {
  let randomNum = Math.floor(Math.random() * (horoscopes.length));
  $('#pcapricorn').text(horoscopes[randomNum]);
});
$('#taurus').click(function(event) {
  let randomNum = Math.floor(Math.random() * (horoscopes.length));
  $('#ptaurus').text(horoscopes[randomNum]);
});
$('#virgo').click(function(event) {
  let randomNum = Math.floor(Math.random() * (horoscopes.length));
  $('#pvirgo').text(horoscopes[randomNum]);
});

$('#leo').click(function(event) {
  let randomNum = Math.floor(Math.random() * (horoscopes.length));
  $('#pleo').text(horoscopes[randomNum]);
});

$('#scorpio').click(function(event) {
  let randomNum = Math.floor(Math.random() * (horoscopes.length));
  $('#pscorpio').text(horoscopes[randomNum]);
});


})
