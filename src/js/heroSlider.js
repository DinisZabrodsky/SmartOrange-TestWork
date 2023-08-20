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
const lengSlider = refs.slider.length

sliderControler ()


function nextSlide() {
   count = count + 1 === lengSlider ? 0 : count = count += 1;
   sliderControler()
}

function backSlide() {
    count = count === 0 ? lengSlider - 1 : count -= 1;
    sliderControler()
}

// Насправді тут багато методів реалізації слайдера, як на мене то найкращим було б використання JSON файлу.
// Однак тут вирішив спробувати відштовхнутись від HTML щоб не писати перевірки на наявність всіх необхідних стрічок.

function sliderControler() {
    const {titel, url} = visibleSlide()
    changeTitelSpan(titel)
    changeNumber()
    btnLink(url)
 
}

function visibleSlide() {
    const data = {}

    refs.slider.forEach((element, index)=> {
        if(count === index) {
            element.classList.remove('hidden')

            data.titel = element.children[2].alt
            data.url = element.children[2].dataset.modal

            return
        }

        element.classList.add('hidden')
    })

    return data
}

function changeTitelSpan(titel) {
    refs.titelSpan.innerHTML = titel
}

// Не зовсім зрозумів пагінацію, тому відображую попередній та наступний слайд

function changeNumber() {

    const currentElement = count + 1
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




