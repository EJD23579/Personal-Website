//fade down from top START

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            document.querySelectorAll("#Career aspirations page content")[0].classList.add("top");

        }
    })
})

observer.observe(document.querySelector("#Career aspirations page content"));


//fade down from top END