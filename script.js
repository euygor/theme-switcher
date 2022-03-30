let theme = localStorage.getItem("data-theme");

if (theme === "dark") {
    document.querySelector("body").classList.toggle("dark");
    document.querySelector(".switch").classList.toggle("move");
    document.querySelector("title").innerHTML = "Theme Dark Mode";
} else if (theme === "light") {
    document.querySelector("body").classList.toggle("light");
    document.querySelector("title").innerHTML = "Theme Light Mode";
}

const changeTheme = () => {
    const body = document.querySelector("body");
    const move = document.querySelector(".switch");
    body.classList.toggle('dark');
    move.classList.toggle('move');

    const title = document.querySelector("title");
    title.innerHTML = title.innerHTML !== "Theme Dark Mode" ? "Theme Dark Mode" : "Theme Light Mode";

    if (theme === null || theme === "light") {
        themeDark();
    } else {
        themeLight();
    }
}

const themeLight = () => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
}

const themeDark = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark")
}