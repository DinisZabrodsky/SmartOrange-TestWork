const refs = {
    btnBack : document.querySelector("#heroSlaiderNext"),
    btnNext : document.querySelector("#heroSlaiderBack"),
    btnLink: document.getElementById('sliderLinkBtn'),

    titelSpan: document.getElementById("heroTitelSpan"),
    slider: Array.from(document.getElementById('slider').children),
    number: Array.from(document.querySelector('.hero-text-count').children),
}

refs.btnNext.addEventListener('click', nextSlide);
refs.btnBack.addEventListener('click', backSlide);


let count = 0
let firstCount = 0

let firstStart = true
const animationDelay = 300

sliderControler()


function nextSlide() {
   firstCount = count
   count = count + 1 === refs.slider.length ? 0 : count = count += 1;
   sliderControler()
}

function backSlide() {
    firstCount = count
    count = count === 0 ? refs.slider.length - 1 : count -= 1;
    sliderControler()
}

// Насправді тут багато методів реалізації слайдера, як на мене то найкращим було б використання JSON файлу.
// Однак тут вирішив спробувати відштовхнутись від HTML щоб не писати перевірки на наявність всіх необхідних стрічок.

function sliderControler() {
    const {titel, url} = getData()

    // При всіх наступних запусках функції
    !firstStart && slideAnimation()
    !firstStart && changeTitelSpan(titel)

    //При першому запуску функції 
    firstStart && visibleSlide()

    changeNumber()
    btnLink(url)
 
}

function visibleSlide() {

    refs.slider.forEach((element, index)=> {
        if(count === index) {
            element.classList.remove('hidden')
            return
        }
    
        element.classList.add('hidden')
        return
    })

    firstStart = false

}

function getData() {
    return data = {
        titel: refs.slider[count].children[2].alt,
        url: refs.slider[count].children[2].dataset.modal,
    }

}

function slideAnimation () {

    refs.slider[firstCount].classList.add('animationHiden')

    setTimeout(() => {
        refs.slider[count].classList.remove('hidden');
        refs.slider[firstCount].classList.add('hidden')
        refs.slider[firstCount].classList.remove('animationHiden')
    }, animationDelay)
}

function changeTitelSpan(titel) {
    refs.titelSpan.classList.add('animationHiden')

    setTimeout(() => {
        refs.titelSpan.innerHTML = titel 
        refs.titelSpan.classList.remove('animationHiden')
    }, animationDelay);
    
}

// Не зовсім зрозумів пагінацію, тому відображую попередній та наступний слайд

function changeNumber() {

    const currentElement = count + 1
    const lengSlider = refs.slider.length
    // console.log(currentElement)

    if (currentElement - 1 === 0 && lengSlider > currentElement) {
        refs.number[0].innerHTML = `0${lengSlider}`;
        refs.number[2].innerHTML = `0${currentElement + 1}`
        return
    }

    if(currentElement - 1 !== 0 && currentElement === lengSlider) {
        refs.number[0].innerHTML = `0${currentElement - 1}`;
        refs.number[2].innerHTML = `01` 
        return
    }

    if(currentElement - 1 !== 0 && currentElement !== lengSlider) {
        refs.number[0].innerHTML = `0${currentElement - 1}` ;
        refs.number[2].innerHTML = `0${currentElement + 1}` ;
        return
    }
    
}

function btnLink(url) {
    refs.btnLink.href = url
}




