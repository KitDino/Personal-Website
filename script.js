function changeTheme() {
    const btn = document.getElementById("themeButton");
    const img = document.getElementById("themeButtonIcon");

    var theStyle = document.querySelector(":root");

    var currentTheme = getComputedStyle(theStyle).getPropertyValue("--theme");

    if (localStorage.getItem("theme") == "dark") {
        theStyle.style.setProperty("--barBackgroundColor", "rgb(44, 44, 44)");
        theStyle.style.setProperty("--nodeBackgroundColor", "rgb(224, 224, 224)");
        theStyle.style.setProperty("--nodeTextColor", "rgb(26, 26, 26)");
        theStyle.style.setProperty("--theme", "light");
        img.src="Images/sun.png";
        localStorage.setItem("theme", "light");
    } else if (localStorage.getItem("theme") == "light") {
        theStyle.style.setProperty("--barBackgroundColor", "rgb(44, 44, 44)");
        theStyle.style.setProperty("--nodeBackgroundColor", "rgb(26, 26, 26)");
        theStyle.style.setProperty("--nodeTextColor", "rgb(200, 200, 200)");
        theStyle.style.setProperty("--theme", "dark");
        img.src="Images/moon.png";
        localStorage.setItem("theme", "dark");
    } else {
        theStyle.style.setProperty("--barBackgroundColor", "rgb(44, 44, 44)");
        theStyle.style.setProperty("--nodeBackgroundColor", "rgb(26, 26, 26)");
        theStyle.style.setProperty("--nodeTextColor", "rgb(200, 200, 200)");
        theStyle.style.setProperty("--theme", "dark");
        img.src="Images/moon.png";
        localStorage.setItem("theme", "dark");
    }
}

function checkTheme() {
    const btn = document.getElementById("themeButton");
    const img = document.getElementById("themeButtonIcon");

    var theStyle = document.querySelector(":root");

    var currentTheme = getComputedStyle(theStyle).getPropertyValue("--theme");

    if (localStorage.getItem("theme") == "light") {
        theStyle.style.setProperty("--barBackgroundColor", "rgb(44, 44, 44)");
        theStyle.style.setProperty("--nodeBackgroundColor", "rgb(224, 224, 224)");
        theStyle.style.setProperty("--nodeTextColor", "rgb(26, 26, 26)");
        theStyle.style.setProperty("--theme", "light");
        img.src="Images/sun.png";
    } else if (localStorage.getItem("theme") == "dark") {
        theStyle.style.setProperty("--barBackgroundColor", "rgb(44, 44, 44)");
        theStyle.style.setProperty("--nodeBackgroundColor", "rgb(26, 26, 26)");
        theStyle.style.setProperty("--nodeTextColor", "rgb(200, 200, 200)");
        theStyle.style.setProperty("--theme", "dark");
        img.src="Images/moon.png";
    } else {
        theStyle.style.setProperty("--barBackgroundColor", "rgb(44, 44, 44)");
        theStyle.style.setProperty("--nodeBackgroundColor", "rgb(224, 224, 224)");
        theStyle.style.setProperty("--nodeTextColor", "rgb(26, 26, 26)");
        theStyle.style.setProperty("--theme", "light");
        img.src="Images/sun.png";
        localStorage.setItem("theme", "light");
    }
}