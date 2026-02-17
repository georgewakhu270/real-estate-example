class Carousel { }

const next = document.querySelector(".two .carousel .car-btn#next")
const prev = document.querySelector('.two .carousel .car-btn#prev')
const slides = document.querySelector('.two .slides')
let currentIndex = 0

const slide = document.querySelectorAll('.two .slide')

let totalSlides = slide.length

console.log(totalSlides)

const moveSlide = (items, direction) => {
    const maxIndex = totalSlides - items
    console.log(maxIndex)
    currentIndex = currentIndex + direction
    console.log(`current index ${currentIndex}`)
    if (currentIndex < 0) {
        currentIndex = 0
    } else if(currentIndex > maxIndex) {
        currentIndex = maxIndex
    }
    const itemWidth = 100 / items
    slides.style.transform = `translateX(-${currentIndex*itemWidth}%)`
}

next.addEventListener('click', () => {
    moveSlide(4, 1)
})

prev.addEventListener('click', () => {
    moveSlide(4, -1)
})
