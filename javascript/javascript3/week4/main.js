class Quiz {
    constructor(name) {
        this.name = name
    }

    fetchQuestion() {
        let main = document.querySelector('main');
        let loading = document.querySelector('.loading');
        main.removeChild(loading);

        return fetch('https://gist.githubusercontent.com/AbodHassam/2d908665bbae8fa2a35a5ee371756e0a/raw/0e76719120fff9d0a30807660e5a8eb36c724d8b/myquiz.json')
            .then(response => response.json())
            .then(questions => questions)
    }

    renderQuestion(questions) {
        let scoreButton = document.querySelector('#score-button');
        let ul = document.querySelector('ul');

        for (let i = 0; i < questions.length; i++) {
            let li = document.createElement('li');
            let img = document.createElement('img');
            let h4 = document.createElement('h4');
            let p = document.createElement('p');
            img.alt = questions[i].title;
            img.src = questions[i].photo;
            h4.innerHTML = questions[i].title;
            p.innerHTML = questions[i].content;
            li.className = questions[i].difficulty;


            li.appendChild(h4);
            li.appendChild(p);
            ul.appendChild(li);
            let easy = document.querySelectorAll('.easy');
            let hard = document.querySelectorAll('.hard');
            let hardRadio = document.getElementById('difficulty_hard');
            let easyRadio = document.getElementById('difficulty_easy');

            const removeElements = (elms) => [...elms].filter(el => el.remove());
            function removeQuestion() {

                hardRadio.disabled = true;
                easyRadio.disabled = true;
                ul.style.display = 'block';
                scoreButton.style.display = 'block';
                nextButton.style.display = 'block';
                timer.style.display = 'block';
            }


            hardRadio.addEventListener('click', () => {
                interval;
                removeElements(easy);
                removeQuestion();
            })

            easyRadio.addEventListener('click', () => {
                interval;
                li.appendChild(img);
                removeElements(hard);
                removeQuestion();
            })


            let select = document.createElement('select');

            for (let j = 0; j < questions[i].options.length; j++) {
                let option = document.createElement('option');
                option.innerHTML = questions[i].options[j].content;
                option.setAttribute('data-is-answer', questions[i].options[j].correct);
                select.appendChild(option);
                li.appendChild(select);
                //console.log(questions[i].options[j].correct);

            }
        }
    }
}

let scoreButton = document.querySelector('#score-button');
scoreButton.addEventListener("click", event = () => {
    console.log('user clicked score button');
    getScore();
    console.log(timer.innerHTML * 100);
    clearInterval(interval);

})


let order = 0;
function animateLiOut(order) {
    let list = document.querySelectorAll('li');
    list[order].style = "transform:translateX(1000px)";
    return new Promise((resolve, reject) => {
        if (order < list.length) {
            setTimeout(() => {
                resolve();
            }, 400);
        }
        else {
            reject(error);
        }
    });
}

function animateNextLiIntoView(nextLi) {
    let list = document.querySelectorAll('li');
    list[nextLi].style = "opacity: 1; transform: scale(1);";
}


let nextButton = document.querySelector('#next-button');
nextButton.addEventListener("click", nextEvent = () => {
    let list = document.querySelectorAll('li');
    animateLiOut(order)
        .then(() => {
            animateNextLiIntoView(order + 1);
            return order++;
        })
        .catch(() => {
            console.log('%cNo more questions !!!', 'font-weight:bold;color:red');
            //let questions = document.querySelector('.questions');
            //questions.innerHTML += '<p id="nomore">No more questions</p>';
        })
})


let counter = 0;
let timeLeft = 60;
let timer = document.getElementById('timer');
timer.style.color = 'white';
timer.innerHTML = timeLeft - counter;
let interval = setInterval(timeIt, 1000);
function timeIt() {
    counter++;
    timer.innerHTML = timeLeft - counter;
    if (counter == timeLeft) {
        clearInterval(interval);
    }
}

let numCorrect = 0;
function getScore() {
    let select = document.querySelectorAll('select');
    let correctAnswersArray = [];
    let incorrectAnswersArray = [];
    let cDetails = document.createElement('details');
    let icDetails = document.createElement('details');
    let cSummary = document.createElement('summary');
    let icSummary = document.createElement('summary');
    cSummary.innerHTML += 'Correct';
    icSummary.innerHTML += 'Inorrect';
    cDetails.appendChild(cSummary);
    icDetails.appendChild(icSummary);

    for (let i = 0; i < select.length; i++) {



        let p = document.createElement('p');
        let list = document.querySelectorAll('li')
        const index = select[i].options.selectedIndex;
        let selectedOption = select[i].options[index];
        let result = document.querySelector('.result');
        if (selectedOption.getAttribute('data-is-answer') == 'true') {
            numCorrect++;
            correctAnswersArray.push(selectedOption.innerHTML);
            //console.log(list[i].firstChild.innerHTML);

            p.innerHTML += 'The question : ' + list[i].querySelector('p').innerHTML + '<br>';
            p.innerHTML += 'The answer : ' + selectedOption.innerHTML;
            select[i].style.backgroundColor = '#02c33b8c';
            cDetails.appendChild(p);
            result.appendChild(cDetails);

        } else {
            incorrectAnswersArray.push(selectedOption.innerHTML);
            p.innerHTML += 'The question : ' + list[i].querySelector('p').innerHTML + '<br>';
            p.innerHTML += 'The answer : ' + selectedOption.innerHTML;
            select[i].style.backgroundColor = '#c302028c';
            icDetails.appendChild(p);
            result.appendChild(icDetails);

        }
        select[i].disabled = true;

    }

    //console.log(correctAnswersArray);
    //console.log(incorrectAnswersArray);

    let result = document.querySelector('.result');
    let correctAnswers = [0, 1, 2, 3, 4];
    let text = ['Visit the mental hospital🤦‍♂️ ', 'Try again😑 ', 'Try again, you can do it😐 ', 'You are getting better🙂 ', 'Excellent😃🎉 '];
    for (let j = 0; j < correctAnswers.length; j++) {
        if (numCorrect == correctAnswers[j]) {
            result.innerHTML += text[j] + '... you have ' + numCorrect + '/4 correct answers.' + '<br>' + 'your score : ' + timer.innerHTML * 100;
            if (correctAnswers[j] == 4) {
                var confettiSettings = { target: 'my-canvas' };
                var confetti = new ConfettiGenerator(confettiSettings);
                confetti.render();
                var audio = new Audio('careless-whisper.mp3');
                audio.play();
            }

        }

    }

    scoreButton.removeEventListener("click", event);
}

const quiz1 = new Quiz('Abod');

quiz1.fetchQuestion().then(questions => {
    quiz1.renderQuestion(questions);
})


