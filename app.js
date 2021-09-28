const navShow = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-responsive-container');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show-nav');
    })
}

const showQuestion = () =>{
    const questions = document.querySelectorAll('.question');
    questions.forEach((question) => {
        question.addEventListener('click', () =>{
            const questionContainer = question.querySelector('.question-container');
            const arrowUp = question.querySelector('.fa-angle-up');
            const arrowDown = question.querySelector('.fa-angle-down');
            questionContainer.classList.toggle('show-question');
            arrowUp.classList.toggle('toggle-arrow-up');
            arrowDown.classList.toggle('toggle-arrow-down');
        })
    });
}

const artistReviews = () =>{
    const artists = [
        {
            text: `"The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time."`,
            artist: 'SOL',
            img: '../assets/daniel-angele-2gu4hKuFhi0-unsplash.jpg'
        },
        {
            text: `“We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies.”`,
            artist: 'Mason Lieberman (The Real Folk Blues, 2020)',
            img: '../assets/ben-collins-Fr2iwKpsi-Y-unsplash.jpg'
        },
    ];

    const artistImage = document.querySelector('#artists .right-side');
    const text = document.querySelector('#artists .quote p');
    const artist = document.querySelector('#artists .quote span a');
    const buttonOne = document.querySelector('#artists .buttons-container #first-artist-button');
    const buttonTwo = document.querySelector('#artists .buttons-container #second-artist-button');
    const artistsBackground = document.querySelector('#artists');

    artistImage.style.background=`url(${artists[0].img}) no-repeat center`;
    artistImage.style.backgroundSize = 'cover';
    text.innerText = `${artists[0].text}`;
    artist.innerText = `${artists[0].artist}`;
    buttonOne.classList.add('clicked-button');

    buttonOne.addEventListener('click', () =>{
        artistsBackground.style.background=`orangered`;
        artistImage.style.background=`url(${artists[0].img}) no-repeat center`;
        artistImage.style.backgroundSize = 'cover';
        text.innerText = `${artists[0].text}`;
        artist.innerText = `${artists[0].artist}`;
        buttonTwo.classList.remove('clicked-button');
        buttonOne.classList.add('clicked-button');
    })
    
    buttonTwo.addEventListener('click', () =>{
        artistsBackground.style.background=`yellow`;
        artistImage.style.background=`url(${artists[1].img}) no-repeat center`;
        artistImage.style.backgroundSize = 'cover';
        text.innerText = `${artists[1].text}`;
        artist.innerText = `${artists[1].artist}`;
        buttonTwo.classList.add('clicked-button');
        buttonOne.classList.remove('clicked-button');
    })
}

const changeImages = () =>{
    const images = ['../assets/sample_4dilla-d886be83.png',
    "../assets/sample_all_india-36327a32.png",
    "../assets/sample_black_country_disco-233bbc85.png",
    "../assets/sample_blarney-469831b2.png",
    "../assets/sample_bombay-668a0fa8.png",
    "../assets/sample_female-a4d2352d.png"]
    const image = document.querySelector('#studio img');
    let counter = 0;
    image.src=`${images[0]}`;
setInterval(() => {
    if(counter===5){
        counter=0;
    }
    counter++;
    image.src=`${images[counter]}`;
}, 1000);
}

navShow();
showQuestion();
artistReviews();
changeImages();

/* 
const questions = document.querySelectorAll('.question');

questions.forEach(question=>{
    const showBtn = question.querySelector('.plus');
    showBtn.addEventListener('click', ()=>{
        questions.forEach(item=>{

            // if item that we clicked is not in the question we clicked, it will remove show class.
            if (item!==question) {
                item.classList.remove('show');
            }
        })
        question.classList.toggle('show');
    })
})
*/