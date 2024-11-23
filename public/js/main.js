const intakeForm = document.querySelector('form')
const biteList = document.querySelector('ul.bites')
const biteNameInput = document.querySelector('input[name=name')
const biteURLInput = document.querySelector('input[name=URL')
const biteItem = document.querySelectorAll('li')


 async function render () {
        const response = await fetch('http://localhost:3000/bites')
        const bites = await response.json()

        console.log(bites)

        biteList.innerHTML = ''
        bites.forEach(bite => {
            const liEl = document.createElement('li')
            const headingEl = document.createElement('h3')
            liEl.id = bite._id
            liEl.innerHTML = `<iframe src="${bite.biteURL}"</iframe>`
            headingEl.innerText = bite.name
            biteList.append(liEl)
            biteList.append(headingEl)
        })
    }


intakeForm.addEventListener('submit', async function (evt) {
    evt.preventDefault()

    const newBite = {}
    newBite.name = biteNameInput.value
    newBite.biteURL = biteURLInput.value 

    const response = await fetch('http://localhost:3000/bites', {
        method: 'POST', 
        headers : {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newBite)
    })

    render()

})

biteList.addEventListener('click', async function (evt) {
    evt.preventDefault()
    const biteId = evt.target.id
    console.log(biteId)
    
    const response = await fetch(`http://localhost:3000/bites/${biteId}`, {
        method: 'DELETE', 
    })

    render()
    console.log('we re-rendered')

})

/* --------View------- */

render()