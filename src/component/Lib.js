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

          on('click', '#navbar li', function(e) {
            if (!this.classList.contains('dropdown') && select('#navbar').classList.contains('navbar-mobile')) {
              select('#navbar').classList.toggle('navbar-mobile')
              select('.mobile-nav-toggle').classList.toggle('bi-list')
              select('.mobile-nav-toggle').classList.toggle('bi-x')
            }
          },true) 

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
