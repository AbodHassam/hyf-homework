function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.body.classList.add(`gradient-${getRandomInt(1, 4)}`);

//-----------------------------------------------------------------

let photos = [
    {
        alt: 'Whitebeard ',
        url: 'http://orig02.deviantart.net/ab55/f/2008/105/9/a/whitebeard_flag___white_cross__by_zerocustom1989.png'
    }, {
        alt: 'Luffy',
        url: 'https://i.pinimg.com/originals/0d/8d/07/0d8d07a763e83f93acf810ae2c523bd7.png'
    }, {
        alt: 'Donquixote Pirates',
        url: 'http://www.iconarchive.com/download/i54299/crountch/one-piece-jolly-roger/Vente-d-esclaves.ico'
    }, {
        alt: 'Red Hair Pirates',
        url: 'https://pre00.deviantart.net/c555/th/pre/f/2018/200/4/8/akagami_kaizokudan_by_kuroravenart-dchpjku.png'
    }, {
        alt: 'Sakura Kingdom',
        url: 'http://icons.iconarchive.com/icons/crountch/one-piece-jolly-roger/128/Chopper-icon.png'
    }, {
        alt: 'Gol D Roger',
        url: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.15752-0/p280x280/46459437_2244485915563637_5588383584655245312_n.png?_nc_cat=105&_nc_ht=scontent-arn2-1.xx&oh=d3e955fc92b5ebafa2179a86393ea7aa&oe=5CAD8F96'
    }, {
        alt: 'Blackbeard',
        url: 'https://pre00.deviantart.net/8e0b/th/pre/f/2008/027/6/a/blackbeard__s_flag_by_zerocustom1989.png'
    }, {
        alt: 'Heart Pirates',
        url: 'https://steamuserimages-a.akamaihd.net/ugc/94977996565724003/B8C34BC1A3E19B079A67C01506A33FF5E0B77B57/'
    }, {
        alt: 'Arlong Pirates',
        url: 'http://www.iconarchive.com/download/i54283/crountch/one-piece-jolly-roger/Arlong.ico'
    }, {
        alt: 'Kuja Pirates',
        url: 'https://i.pinimg.com/originals/8b/1d/f7/8b1df74e07f755ff96cdd84bdd71d784.png'
    }
];


let list = document.querySelectorAll("li");
//console.log(list);

for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = '<p>' + photos[i].alt + '</p>';
    list[i].innerHTML += '<img alt="' + photos[i].alt + '" src="' + photos[i].url + '">';
}

let order = 0;
function animateLiOut(order, str) {
    if (str == "accept") {
        list[order].style = "transform:translateX(1000px)";
    }
    if (str == "reject") {
        list[order].style = "transform:translateX(-1000px)";
    }
    return new Promise((resolve, reject) => {
        if (order < list.length) {
            setTimeout(() => {
                resolve();
            }, 500);
        }
        else {
            reject(error);
        }
    });
}


function animateNextLiIntoView(nextLi) {
    list[nextLi].style = "opacity: 1; transform: scale(1);";
}

function thumbsX(currentClass) {
    //console.log(currentClass);
    animateLiOut(order, currentClass)
        .then(() => {
            animateNextLiIntoView(order + 1);
            return order++;
        })
        .catch(() => {
            console.log('%cNo more Pirate flags to thumbs up or down !!!','font-weight:bold;color:red');

        })

}

