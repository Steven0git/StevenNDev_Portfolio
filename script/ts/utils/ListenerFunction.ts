
  /* Easy selector helper function */
 export function select(el: string, all = false) {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /* Easy event listener export function */
export function on(type: string, el: string, listener: EventListenerOrEventListenerObject, all = false) {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /* Easy on scroll event listener */
export function onscroll(el: HTMLElement, listener: EventListenerOrEventListenerObject) {
    el.addEventListener('scroll', listener)
  }
