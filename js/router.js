const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/spa/pages/404.html",
    "/spa/refresh": "/spa/pages/refresh.html",
    "/spa/": "/spa/pages/index.html",
    "/spa/about": "/spa/pages/about.html",
    "/spa/lorem": "/spa/pages/lorem.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
	console.log(path)
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;


handleLocation();
