window.addEventListener('scroll', function() {
    if(window.scrollY > 0) {
        document.querySelector("#navbar").classList.add("navbar-filled")
    } else {
        document.querySelector("#navbar").classList.remove("navbar-filled")
    }
})
