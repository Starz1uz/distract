let inp = document.querySelector('input')

inp.oninput = (e) => {
    let val = e.target.value
    if (val === Number) {
        inp.classList.add('active')
    }

}

