const envelopeWrapper = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');
const letterText = document.querySelector('.text');

var audioKeyboard = document.getElementById("myAudio");
var audioPaper = document.getElementById("paperAudio");
var audioOverture = document.getElementById("overtureAudio");
var audioTwinkle = document.getElementById("twinkleAudio");
var audioDubOver = document.getElementById("dubOverAudio");

var i = 0;
var txt = 'Mi amorcito, hoy es un día muy especial porque estamos celebrando tu cumpleaños, y no puedo estar más feliz de compartirlo con vos. Aunque sé que últimamente las cosas han sido un poco difíciles, quiero que siempre tengás presente que estoy aquí para apoyarte en lo que sea y en cualquier momento que lo necesités. Siempre voy a estar a tu lado, porque te quiero más de lo que las palabras pueden decir.\n\n Yo se que vos podes hacer todo lo que te propongas y yo estaré a tu lado para acompañarte en cada sueño, en cada logro y en cada reto que te enfrentés. Estoy aquí para compartir todo con vos, y no puedo esperar para ver lo que nos trae el futuro.\n\n Me siento increíblemente afortunado de tenerte en mi vida, y quiero que sepás que no importa lo que venga, siempre voy a estar aquí. No solo en los días buenos, sino también en esos momentos más difíciles, porque lo que más quiero es que sepás que no estás sola. Vos sos una persona increíblemente valiosa, y no importa lo que esté pasando, siempre voy a verte con los mismos ojos llenos de admiración y amor.\n\n Mi vida, este día es para celebrar todo lo bueno que sos, y para las personas que te rodean. Tu presencia ilumina cada momento y no puedo esperar seguir celebrando tus cumpleaños y acompañándote donde estes. Quiero seguir celebrando juntos en este cumpleaños y en muchos más que están por venir. Feliz cumpleaños, mi amorcito. Gracias por ser todo lo que sos, y por permitirme estar a tu lado.\n\n Feliz Cumpleaños, Katherine\n\nProgramado con mucho amor\nDavid Mendoza';
var speed = 70;
let intervalScroll = scrollToBottom;

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' 
    });
}

function typeWriter() {
    if (i >= txt.length){
        audioKeyboard.pause();
        audioTwinkle.play();
        changeToActualImage();
        setTimeout(clearInterval, 2000, intervalScroll)
    } else {
        if (txt.charAt(i) === '\n'){
            document.getElementById("textP").innerHTML += '<br>';
        }else{
            document.getElementById("textP").innerHTML += txt.charAt(i);
        }
        i++;
        setTimeout(typeWriter, speed);
    }
}

envelopeWrapper.addEventListener('click', () => {
    envelopeWrapper.classList.toggle('flap');

    setTimeout(letterAnim, 1000);
}, {once: true});

function changeToActualImage() {
    var imgElement = document.getElementById('dynamicImage');
    imgElement.src = '../content/KathoYyo.png';  
    imgElement.style.backgroundColor = 'transparent';  // Optional: Remove the background color
}


function letterAnim(){
    let animation1 = letter.animate([{top: '0px'}, {top: '-200px'}], {duration: 800, easing: 'ease-in'})
    audioPaper.play();

    animation1.addEventListener('finish', (event)=>{
        letter.style.zIndex = 5;
        letter.style.transform = `scale(1.5, 1.5)`;
        letter.style.height = '0px';
        var animation2 = letter.animate([{top: '-200px'}, {top: '-100px'}], {duration: 800, fill: 'forwards', easing: 'ease-in'})
        animation2.addEventListener('finish',  (event)=>{
            intervalScroll = setInterval(scrollToBottom, 1000)
            setTimeout(typeWriter, 3000);
            setTimeout(function(){
                audioDubOver.play()
            }, 4000);
            setTimeout(function(){
                audioKeyboard.loop = true;
                audioKeyboard.volume = 0.1;
                audioKeyboard.play();
                audioOverture.loop = true;
                audioOverture.volume = 0.15;
                audioOverture.play();
            }, 3000);
        });
    })
}
