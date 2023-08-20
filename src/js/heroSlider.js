const refs = {
    btnBack : document.querySelector("#heroSlaiderNext"),
    btnNext : document.querySelector("#heroSlaiderBack"),

    titelSpan: document.getElementById("heroTitelSpan"),
    slider: Array.from(document.getElementById('slider').children),
    number: Array.from(document.querySelector('.hero-text-count').children),
}

refs.btnNext.addEventListener('click', nextSlide);
refs.btnBack.addEventListener('click', backSlide);


let count = 0
const lengSlider = refs.slider.length


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

function sliderControler () {
    const {titel, url} = visibleSlide()
    changeTitelSpan(titel)
    changeNumber()
 
}

function visibleSlide () {
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

function changeNumber() {
    console.log(refs.number)
    
}






