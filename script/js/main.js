import { CalAgeAndExp } from "./utils/getExpAndDate.js";
import { select, on, onscroll } from "./utils/ListenerFunction.js";
class Website {
    constructor() {
        this.initPreloader();
        this.initExpFunction();
        this.initNavbarLinks();
        this.initScrollTo();
        this.initBackToTopButton();
        this.initMobileNavToggle();
        this.initHeroTypeEffect();
        this.initSkillsAnimation();
        this.initPortfolioIsotopeAndFilter();
        this.initPortfolioLightbox();
        this.initPortfolioDetailsSlider();
        this.WindowLoad();
        this.DocumentDOM();
    }
    WindowLoad() {
        window.addEventListener("load", () => this.initAOS());
    }
    DocumentDOM() {
        document.addEventListener("DOMContentLoaded", () => {
            this.initPureCounter();
            setTimeout(this.CheckCSS, 3000);
        });
    }
    CheckCSS() {
        const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
        let cssLoaded = false;
        styleSheets.forEach(sheet => {
            if (sheet.href) {
                cssLoaded = true;
            }
        });
        if (!cssLoaded) {
            location.reload();
        }
    }
    initPreloader() {
        const preloader = document.querySelector("#preloader");
        if (preloader) {
            window.addEventListener('load', () => {
                preloader.remove();
                AOS.init({
                    duration: 800,
                    easing: "slide",
                    once: true,
                    mirror: false
                });
            });
        }
    }
    initExpFunction() {
        CalAgeAndExp({
            birthDate: new Date(2006, 5 - 1, 27),
            yearStartedCode: 2018,
            ageElementId: "age",
            birthDateElementId: "born",
            experienceElementId: "expAge"
        });
    }
    initNavbarLinks() {
        let navbarlinks = select('#navbar .scrollto', true);
        const navbarlinksActive = () => {
            let position = window.scrollY + 200;
            navbarlinks.forEach(navbarlink => {
                if (!navbarlink.hash)
                    return;
                let section = select(navbarlink.hash);
                if (!section)
                    return;
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    navbarlink.classList.add('active');
                }
                else {
                    navbarlink.classList.remove('active');
                }
            });
        };
        window.addEventListener('load', navbarlinksActive);
        onscroll(document, navbarlinksActive);
    }
    initScrollTo() {
        const scrollto = (el) => {
            let elementPos = select(el).offsetTop;
            window.scrollTo({
                top: elementPos,
                behavior: 'smooth'
            });
        };
    }
    initBackToTopButton() {
        let backtotop = select('.back-to-top');
        if (backtotop) {
            const toggleBacktotop = () => {
                if (window.scrollY > 100) {
                    backtotop.classList.add('active');
                }
                else {
                    backtotop.classList.remove('active');
                }
            };
            window.addEventListener('load', toggleBacktotop);
            onscroll(document, toggleBacktotop);
        }
    }
    initMobileNavToggle() {
        on('click', '.mobile-nav-toggle', function (e) {
            select('body').classList.toggle('mobile-nav-active');
            this.classList.toggle('bi-list');
            this.classList.toggle('bi-x');
        });
    }
    initHeroTypeEffect() {
        const typed = select('.typed');
        if (typed) {
            let typed_strings = typed.getAttribute('data-typed-items').split(',');
            new Typed('.typed', {
                strings: typed_strings,
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000
            });
        }
    }
    initSkillsAnimation() {
        let skilsContent = select('.skills-content');
        if (skilsContent) {
            new Waypoint({
                element: skilsContent,
                offset: '80%',
                handler: function (direction) {
                    let progress = select('.progress .progress-bar', true);
                    progress.forEach((el) => {
                        el.style.width = el.getAttribute('aria-valuenow') + '%';
                    });
                }
            });
        }
    }
    initPortfolioIsotopeAndFilter() {
        window.addEventListener('load', () => {
            let portfolioContainer = select('.portfolio-container');
            if (portfolioContainer) {
                let portfolioIsotope = new Isotope(portfolioContainer, {
                    itemSelector: '.portfolio-item'
                });
                let portfolioFilters = select('#portfolio-flters li', true);
                on('click', '#portfolio-flters li', function (e) {
                    e.preventDefault();
                    portfolioFilters.forEach(function (el) {
                        el.classList.remove('filter-active');
                    });
                    this.classList.add('filter-active');
                    portfolioIsotope.arrange({
                        filter: this.getAttribute('data-filter')
                    });
                    portfolioIsotope.on('arrangeComplete', function () {
                        AOS.refresh();
                    });
                }, true);
            }
        });
    }
    initPortfolioLightbox() {
        const portfolioLightbox = GLightbox({
            selector: '.portfolio-lightbox'
        });
    }
    initPortfolioDetailsSlider() {
        new Swiper('.portfolio-details-slider', {
            speed: 400,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        });
    }
    initAOS() {
        window.addEventListener('load', () => {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            });
        });
    }
    initPureCounter() {
        new PureCounter();
    }
}
new Website();
//# sourceMappingURL=main.js.map