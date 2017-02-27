$(document).ready(function() {
    $('#radioyes').click(function() { $("#fun").fadeIn("slow", function() {}); })
//this is the code for the entry page that fades in the input box
$('#radiono').click(function(){ window.close()})
    $("#firstbutton").click(function() {
        let name = $('#firstinput').val();
        $('#formbox').text("Hello " + name);
        setTimeout(function() {
                $('#enter').html('enter?');
            },
            1000);
    })
    //this code creates a link that uses the users name

    $('#enter').click(function() {
        $("#entrybox").slideUp("2000", function() {
//this code is  jquery animation function
        });

    })

    $(".links").click(function(){
               $(".links").effect( "shake", {times:3}, 100 );
            });




//this is an array of horoscopes
let horoscopes = ["A dark man will knock off your hat in the morning. It will blow away into a termite hill.", "When you reach for your car’s handle, a slug may be found in the inner hollow.", "Don’t drink any orange juice until she replies to your e-mail.",
" Your lucky word is: 'Crundus'.", "When you wake up your pillow will be wet. Toss it out quickly and burn your sheets.",
 "Do not shower tomorrow. Instead have the old man on the J train wipe your face with his beard. You only need ask.",
 "Your lucky word is: 'Drip'.",
" Beware foul winds blowing from the neighborhood deli. It is a warning that the thing you dreamed will come true.",
"You will be receive a sudden increase in wealth and auditory hallucinations.",
"Your lucky word is: 'Corn'.",
"The next cobbled street you walk down will hold an interesting and loud surprise. Make sure you are wearing running shoes on that day.",
"When you return home, all your water pipes will have something strange and clear in them and you will be happy that that was the worst thing to happen to you.", "Your lucky word is: 'Felpt'.",
 "The beach is the perfect spot for you on these sizzling days. You will see something out in the ocean, but no one will believe you.",
 "Don’t let thoughts of thatthing you saw when you were a child consume you, or it might come back.", "Your lucky word is:'Domino.'" ,

 "There will be a price decrease in the canned meals aisle of your local grocery store. Buy up, you will be needing them.",
 "Your lucky word is: 'Nongo'.",

" You do not have worms crawling inside of you. Ignore the itching and forget the dreams you’ve been having. They are from exhaustion. Now go back to sleep and wait for further instruction.",
" Your luck word is: 'Provost'.",
 "An interesting letter is on its way to you bearing good news. When you reply back, you will slice your finger on the envelope when you press down the flap. Your blood will seal the pact.", "Your lucky word is: 'Roid'.",
 "Somebody is expecting! Though it will not be what you think. A nameless app will be downloaded onto your phone in the morning. Use it to flash light on the bellies of everyone you know.", "Your lucky word is: 'Delphine'.",

" Shelby knows what you did and she is waiting for you. Take the back door exit when you are leaving work today.", "Your lucky word is: 'Crift'.",

 "One day you will hear a voice calling to you from the sewer. If you answer you will be offered a job. If you ignore it, your current profession will give you a promotion.",

"Your lucky word is: 'Ceriac'.",

 "Never the bridesmaid and always the bride. Your time is coming up soon. If you act now, you can replace the girl and no one will ever find out.", "Never fear. Judgement is on it's way to you", "Your lucky word is: 'Per'."
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
