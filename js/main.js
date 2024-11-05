addEventListener('load', function() {
    const currentpage = window.location.pathname;
    const nav_cv = document.getElementById('nav_cv');
    const nav_portfolio = document.getElementById('nav_portfolio');
    const nav_about = document.getElementById('nav_about');
    const nav_project = document.getElementById('nav_project');

    if (currentpage.includes('cv.html')) {
        nav_cv.classList.add('deactive');
        nav_about.classList.add('deactive');
        nav_project.classList.add('deactive');
        nav_portfolio.classList.remove('deactive');
    }
    else {
        nav_cv.classList.remove('deactive');
        nav_portfolio.classList.add('deactive');
        nav_about.classList.remove('deactive');
        nav_project.classList.remove('deactive');
    }
});

