// JavaScript source code



 // SKillsets JavaScript START


    // Declare opacity and time variables for fade ins
    var opacity = 0;
    var intervalID = 0;



    // Python fade in settings
    // Assign interval ID value based on 20 millisecond intervals using show function
    function fadeInPy() {
        intervalID = setInterval(showPy, 20);


    }
    // Show python text
    function showPy() {
        var python = document.getElementById("showPy");
        opacity = Number(window.getComputedStyle(python).getPropertyValue("opacity"));
        if (opacity <1) {
            opacity = opacity + 0.1;
            python.style.opacity = opacity;
        }
        else {
            clearInterval(intervalID);
        }
}




// Javascript fade in settings
// Assign interval ID value based on 20 millisecond intervals using show function
function fadeInJs() {
    intervalID = setInterval(showJs, 20);


}
// Show Javascript text
function showJs() {
    var js = document.getElementById("showJs");
    opacity = Number(window.getComputedStyle(js).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        js.style.opacity = opacity;
    }
    else {
        clearInterval(intervalID);
    }
}


// CSS fade in settings
// Assign interval ID value based on 20 millisecond intervals using show function
function fadeInCSS() {
    intervalID = setInterval(showCSS, 20);


}
// Show CSS text
function showCSS() {
    var css = document.getElementById("showCSS");
    opacity = Number(window.getComputedStyle(css).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        css.style.opacity = opacity;
    }
    else {
        clearInterval(intervalID);
    }
}


// PSQL fade in settings
// Assign interval ID value based on 20 millisecond intervals using show function
function fadeInPSQL() {
    intervalID = setInterval(showPSQL, 20);


}
// Show PSQL text
function showPSQL() {
    var psql = document.getElementById("showPSQL");
    opacity = Number(window.getComputedStyle(psql).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        psql.style.opacity = opacity;
    }
    else {
        clearInterval(intervalID);
    }
}

// C# fade in settings
// Assign interval ID value based on 20 millisecond intervals using show function
function fadeInCsh() {
    intervalID = setInterval(showCsh, 20);


}
// Show C# text
function showCsh() {
    var csh = document.getElementById("showCsh");
    opacity = Number(window.getComputedStyle(csh).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        csh.style.opacity = opacity;
    }
    else {
        clearInterval(intervalID);
    }
}

// .Net fade in settings
// Assign interval ID value based on 20 millisecond intervals using show function
function fadeInDotNet() {
    intervalID = setInterval(showDotNet, 20);


}
// Show .Net text
function showDotNet() {
    var dotNet = document.getElementById("showDotNet");
    opacity = Number(window.getComputedStyle(dotNet).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        dotNet.style.opacity = opacity;
    }
    else {
        clearInterval(intervalID);
    }
}



// React fade in settings
// Assign interval ID value based on 20 millisecond intervals using show function
function fadeInReact() {
    intervalID = setInterval(showReact, 20);


}
// Show React text
function showReact() {
    var react = document.getElementById("showReact");
    opacity = Number(window.getComputedStyle(react).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        react.style.opacity = opacity;
    }
    else {
        clearInterval(intervalID);
    }
}