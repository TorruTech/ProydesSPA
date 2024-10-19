
window.addEventListener('DOMContentLoaded', event => {

    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
 
document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        var timeElement = document.getElementById("current-time");
        var currentTime = new Date();
        var hours = String(currentTime.getHours()).padStart(2, '0');
        var minutes = String(currentTime.getMinutes()).padStart(2, '0');
        var seconds = String(currentTime.getSeconds()).padStart(2, '0');
        timeElement.innerText = hours + ":" + minutes + ":" + seconds;
    }

    updateTime(); // Initial call to display the time immediately
    setInterval(updateTime, 1000); // Update the time every second
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleAnimation() {
    const timelineItems = document.querySelectorAll('.timeline li');
    timelineItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('in-view');
        } else {
            item.classList.remove('in-view');
        }
    });
}

window.addEventListener('scroll', handleAnimation);

function handleServiceAnimation() {
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('animate');
        } else {
            item.classList.remove('animate');
        }
    });
}

window.addEventListener('scroll', handleServiceAnimation);

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    var portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(function(item) {
        if (isElementInViewport(item)) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
    });
}


window.addEventListener('scroll', handleScroll);
handleScroll();


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkElementsVisibility() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

window.addEventListener('DOMContentLoaded', checkElementsVisibility);
window.addEventListener('scroll', checkElementsVisibility);


function getWeather() {
    const apiKey = 'f2221861eefa0ea1283b68e0275a7e28';
    const city = 'Cuarte de Huerva';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    async function conexionAPI(apiUrl) {
        let response = await fetch(apiUrl);
        let data = await response.json();
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `Tª: ${data.main.temp}°C <br> Descripción: ${data.weather[0].description} <br> <i class="fas fa-sun" style="color: orange;"></i>`;
    }

    conexionAPI(apiUrl);

}

window.addEventListener('load', getWeather);