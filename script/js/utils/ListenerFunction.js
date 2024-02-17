export function select(el, all = false) {
    el = el.trim();
    if (all) {
        return [...document.querySelectorAll(el)];
    }
    else {
        return document.querySelector(el);
    }
}
export function on(type, el, listener, all = false) {
    let selectEl = select(el, all);
    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener));
        }
        else {
            selectEl.addEventListener(type, listener);
        }
    }
}
export function onscroll(el, listener) {
    el.addEventListener('scroll', listener);
}
//# sourceMappingURL=ListenerFunction.js.map