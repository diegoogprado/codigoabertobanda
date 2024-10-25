const images = [
    {url: "./src/SEDANO-74.jpg", alt: "Código Aberto-74"},
    {url: "./src/SEDANO-78.jpg", alt: "Código Aberto-78"},
    {url: "./src/SEDANO-94.jpg", alt: "Código Aberto-94"},
    {url: "./src/SEDANO-102.jpg", alt: "Código Aberto-102"},
    {url: "./src/SEDANO-105.jpg", alt: "Código Aberto-105"},
]

let currentIndex = 0
let slides = document.querySelectorAll('.slide')
let totalSlides = slides.length
let interval = 5000

function loadImages() {
    const slidesContainer= document.querySelector(`.slides`)

    images.forEach((image, index) => {
        const slide = document.createElement('div')
        slide.classList.add('slide')
        if(index === 0) slide.classList.add('active')

        const imgElement = document.createElement('img')
        imgElement.src = image.url
        imgElement.alt = image.alt

        slide.appendChild(imgElement)
        slidesContainer.appendChild(slide)
    })
}

function updateSlides() {
    slides = document.querySelectorAll('.slide')
    totalSlides = slides.length
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active')
        if(i === index) {
            slide.classList.add('active')
        }
    })
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides
    showSlide(currentIndex)
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
    showSlide(currentIndex)
}

document.querySelector(`.next`).addEventListener('click', nextSlide)
document.querySelector(`.prev`).addEventListener('click', prevSlide)

let autoSlide = setInterval(nextSlide, interval)

document.querySelector(`.slider`).addEventListener('mouseover', () => {
    clearInterval(autoSlide)
})

document.querySelector(".slider").addEventListener("mouseout", () => {
    autoSlide = setInterval(nextSlide, interval)
})

window.onload = () => {
    loadImages()
    updateSlides()
}

function toggleMenu() {
    document.querySelector('.navMenu').classList.toggle('activeM')
}