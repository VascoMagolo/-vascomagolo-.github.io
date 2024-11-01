addEventListener('load', function() {
    const currentpage = window.location.pathname;
    const nav_cv = document.getElementById('nav_cv');
    const nav_portfolio = document.getElementById('nav_portfolio');

    if (currentpage.includes('cv.html')) {
        nav_cv.classList.add('active');
        nav_portfolio.classList.remove('active');
    }
    else {
        nav_cv.classList.remove('active');
        nav_portfolio.classList.add('active');
    }
});

