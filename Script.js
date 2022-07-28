// JavaScript source code




    var opacity = 0;
    var intervalID = 0;

    function fadeIn() {
        intervalID = setInterval(show, 20);


    }

    function show() {
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

