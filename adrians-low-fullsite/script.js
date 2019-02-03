const getScrollPosition = () => {
    const x = document.querySelector('body')
    const overAll = x.getBoundingClientRect()
    const innerHeight = window.innerHeight
    const positionPecentage = overAll.top / overAll.height
    const y = innerHeight * positionPecentage

    const result = 'translateY(' + (y + 1450) * -1 + 'px)'
    console.log(result)
    return result
}



const updatePosition = function () {
    const logo = document.querySelector('.logo')
    logo.setAttribute('style', 'transform: ' + getScrollPosition())
}

document.onscroll = updatePosition

updatePosition()