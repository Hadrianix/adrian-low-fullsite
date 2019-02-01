const getScrollPosition = () => {
    const x = document.querySelector('body')
    const overAll = x.getBoundingClientRect()
    const percentValue = ((overAll.top / overAll.height * -1) * 900) + '%'
    return percentValue
}

document.onscroll = function () {
    const logo = document.querySelector('.logo')
    let logoTop = document.querySelector('.logo').style.top;
    logo.style.top = getScrollPosition()
}