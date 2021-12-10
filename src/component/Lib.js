import React,{useEffect} from 'react'
import AOS from 'aos'
function Lib() {
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }
      const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
          if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
          } else {
            selectEl.addEventListener(type, listener)
          }
        }
      }
      
    useEffect(() => {

        on('click', '.mobile-nav-toggle', function(e) {
            select('#navbar').classList.toggle('navbar-mobile')
            this.classList.toggle('bi-list')
            this.classList.toggle('bi-x')
          })
        

          on('click', '.navbar .dropdown > a', function(e) {
            if (select('#navbar').classList.contains('navbar-mobile')) {
              e.preventDefault()
              this.nextElementSibling.classList.toggle('dropdown-active')
            }
          }, true)

        let heroCarouselIndicators = select("#hero-carousel-indicators")
        let heroCarouselItems = select('#heroCarousel .carousel-item', true)

        heroCarouselItems.forEach((item, index) => {
        (index === 0) ?
        heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
            heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
        });

        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        })
      }, []);
    return (
        <></>
    )
}

export default Lib
