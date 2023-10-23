let textOne = 'Not sure where should you go?';
let i = 0;
let speed = 80;

function typeFirstSentence() {
    if (i < textOne.length) {
        document.querySelector('#parOne').textContent += textOne.charAt(i);
        i++;
        setTimeout(typeFirstSentence, speed)
    }
}
typeFirstSentence();

let textTwo = 'Let us help you make the right choice!';
let a = 0;

function typeSecondSentence() {
        document.querySelector('#parOne').style.display = 'none';
    if (a < textTwo.length) {
        document.querySelector('#parTwo').textContent += textTwo.charAt(a);
        a++;
        setTimeout(typeSecondSentence, speed)
    }
    
}
setTimeout(typeSecondSentence, 2500);

let textThree = 'Hit the button Start and we will help you!!';
let b = 0;

function typeThirdSentence() {
        document.querySelector('#parOne').style.display = 'none';
        document.querySelector('#parTwo').style.display = 'none';
    if (b < textThree.length) {
        document.querySelector('#parThree').textContent += textThree.charAt(b);
        b++;
        setTimeout(typeThirdSentence, speed)
    }
    
}
setTimeout(typeThirdSentence, 6000);

//block animation
gsap.to("h1",{y:20,ease:"bounce", duration:1})
gsap.from(".start",{y:30,duration:2,delay:6})


const image = document.querySelector ("#myImage");
const text = document.querySelector ("h1");
const buttonStart = document.querySelector (".start");
const buttonOne = document.querySelector ("#one");
const buttonTwo = document.querySelector("#two");


buttonStart.addEventListener ("click", beginningofQuestions);

 function beginningofQuestions () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1594179594534-9d826c107c10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "What type of traveler are you?";
    buttonStart.style="display:none";
    buttonOne.style="display:block";
    buttonTwo.style ="display:block";;

    buttonOne.innerHTML = "I will try anything once!";
    buttonTwo.innerHTML = "I am a planner";

    buttonOne.addEventListener("click", travelling);
    buttonTwo.addEventListener("click", planner);

    document.querySelector('#parOne').style.display = "none";
    document.querySelector('#parTwo').style.display = 'none';
    document.querySelector('#parThree').style.display = 'none';
    document.querySelector('#parFour').style.display = 'none';

 }

function travelling () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1613109040830-ffdd96756f5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "Who else is coming?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "I am travelling solo";
    buttonTwo.innerHTML = "I will bring all my family";

    buttonOne.addEventListener("click", solo);
    buttonTwo.addEventListener ("click",wholeFamily)
}


function wholeFamily (){
    image.setAttribute ("src","https://images.unsplash.com/photo-1599709266514-c19e5aade84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "How many generations?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "2";
    buttonTwo.innerHTML ="3";

    buttonOne.addEventListener("click", two);
    buttonTwo.addEventListener ("click", three)
}


function two () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1636123313721-d5587afbb084?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZhY2F0aW9uJTIwd2Vla2VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "How long do you have?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "A long weekend";
    buttonTwo.innerHTML ="Two weeks or more";

    buttonOne.addEventListener("click", longweek);
    buttonTwo.addEventListener ("click", more)
}

function longweek () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1501117716987-c8c394bb29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFjYXRpb24lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "Where are you staying?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "Airbnb";
    buttonTwo.innerHTML ="Luxury hotel,please! ";
    buttonOne.addEventListener("click", airbnb);
    buttonTwo.addEventListener("click", luxuryHotel)

}


function more () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1501117716987-c8c394bb29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFjYXRpb24lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "Where are you staying?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "Airbnb";
    buttonTwo.innerHTML ="Luxury hotel,please! ";

    buttonOne.addEventListener("click", airbnb);
    buttonTwo.addEventListener("click", luxuryHotel)
}


function  three() {
    image.setAttribute ("src","https://images.unsplash.com/photo-1636123313721-d5587afbb084?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZhY2F0aW9uJTIwd2Vla2VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "How long do you have?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "A long weekend";
    buttonTwo.innerHTML ="Two weeks or more";

    buttonOne.addEventListener("click", longweek);
    buttonTwo.addEventListener ("click", more)
}


function solo () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1599709266514-c19e5aade84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "Is this your first solo trip?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "Yep";
    buttonTwo.innerHTML ="Nope";

    buttonOne.addEventListener("click", yep);
    buttonTwo.addEventListener("click", nope);
}


function yep () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1636123313721-d5587afbb084?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZhY2F0aW9uJTIwd2Vla2VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "How long do you have?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "A long weekend";
    buttonTwo.innerHTML ="Two weeks or more";

    buttonOne.addEventListener("click", longWeekend);
    buttonTwo.addEventListener("click",weeks );
}

function nope () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1636123313721-d5587afbb084?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZhY2F0aW9uJTIwd2Vla2VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "How long do you have?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "A long weekend";
    buttonTwo.innerHTML ="Two weeks or more";

    buttonOne.addEventListener("click", longWeekend)
    buttonTwo.addEventListener("click", weeks)
}


function weeks () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1501117716987-c8c394bb29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFjYXRpb24lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "Where are you staying?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "Airbnb";
    buttonTwo.innerHTML ="Luxury hotel,please! ";

    buttonOne.addEventListener("click", airbnb)
    buttonTwo.addEventListener("click", luxuryHotel)

}

function luxuryHotel () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmFjYXRpb24lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "What do you want to see out of your window?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "A big city";
    buttonTwo.innerHTML ="Ocean view" ;

    buttonTwo.addEventListener("click", bigCity)
    buttonTwo.addEventListener("click", oceanView)

}
function oceanView () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "Pack your bags! You're headed to Carribien";
    buttonStart.style.display="none";
    buttonOne.style.display="none";
    buttonTwo.style.display="none";
}

function longWeekend () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1501117716987-c8c394bb29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFjYXRpb24lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "Where are you staying?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "Airbnb";
    buttonTwo.innerHTML ="Luxury hotel,please! ";
    buttonOne.addEventListener("click", airbnb);
    buttonTwo.addEventListener("click",luxury  );
}

function airbnb () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmFjYXRpb24lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "What do you want to see out of your window?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "A big city";
    buttonTwo.innerHTML ="Ocean view" ;

    buttonOne.addEventListener("click",bigCity );
    buttonTwo.addEventListener("click",oceanView );
}


 function bigCity () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1517760307355-e48f68215de6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZhY2F0aW9uJTIwcmVsYXh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "What do you plan your itinerary around?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "Food and fun destination";
    buttonTwo.innerHTML ="Shopping and relax" ;

    buttonOne.addEventListener("click",food );
    buttonTwo.addEventListener("click",relax );

 }

function relax () {
    image.setAttribute ("src","https://plus.unsplash.com/premium_photo-1683120907088-920c164865f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlsYW4lMjBzaG9wcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "Pack your bags! You're headed to Milan";
    buttonStart.style.display="none";
    buttonOne.style.display="none";
    buttonTwo.style.display="none";
}



function food () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1522933001375-72d29575cf05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZhY2F0aW9uJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "What are you craving?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "Comfort food";
    buttonTwo.innerHTML ="Only restaurants" ;

    buttonOne.addEventListener("click",comfort );
    buttonTwo.addEventListener("click",restaurants );

}

function restaurants () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1508028209469-933de69c0f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFtc3RlcmRhbSUyMHJlc3RhdXJhbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "Pack your bags! You're headed to Amsterdam";
    buttonStart.style.display="none";
    buttonOne.style.display="none";
    buttonTwo.style.display="none";
}

function comfort () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1572204883739-dcc44d1164e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJpcm1pbmdoYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "Pack your bags! You're headed to Birmingham";
    buttonStart.style.display="none";
    buttonOne.style.display="none";
    buttonTwo.style.display="none";
}


function planner () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1591030288156-ededef494ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZhY2F0aW9uJTIwZmFtaWx5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "Who else is coming?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "I am travelling solo";
    buttonTwo.innerHTML ="The whole family is coming" ;

    buttonOne.addEventListener("click", solo);
    buttonTwo.addEventListener("click",family);
    
}

function family () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1529180979161-06b8b6d6f2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZhY2F0aW9uJTIwZmFtaWx5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "How long do you have?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "A long weekend";
    buttonTwo.innerHTML ="Two weeks and more" ;

    buttonOne.addEventListener("click", longWeekend);
    buttonTwo.addEventListener("click",twoWeeks);
}

function twoWeeks () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmFjYXRpb24lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "Where are you staying?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "Airbnb";
    buttonTwo.innerHTML ="Luxury hotel" ;

    buttonOne.addEventListener("click", airbnb);
    buttonTwo.addEventListener("click",luxury);
}

function luxury () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1599682715474-361182378581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hcGxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "What do you plan your itinerary around?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "Food and fun destination";
    buttonTwo.innerHTML ="Cultural experience" ;

    buttonOne.addEventListener("click",food );
    buttonTwo.addEventListener("click",cultural);
}


function cultural () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmFjYXRpb24lMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "Which of these is more your thing?";
    buttonStart.style.display="none";

    buttonOne.innerHTML = "Walking tours";
    buttonTwo.innerHTML ="Historical museums" ;

    buttonOne.addEventListener("click",rome);
    buttonTwo.addEventListener("click",naples);
}


function naples () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1609244283184-96db6d696573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFwbGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "Pack your bags! You're headed to Naples";
    buttonStart.style.display="none";
    buttonOne.style.display="none";
    buttonTwo.style.display="none";

}

function rome () {
    image.setAttribute ("src","https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60");
    text.innerHTML= "Pack your bags! You're headed to Rome";
    buttonStart.style.display="none";
    buttonOne.style.display="none";
    buttonTwo.style.display="none";
}


