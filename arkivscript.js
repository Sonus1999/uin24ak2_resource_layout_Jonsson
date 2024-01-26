function KnappeTrykk(knapp) {
    
    const knapper = document.querySelectorAll('button')
    
    knapper.forEach(function (button) {
        button.style.backgroundColor = ''
        button.style.color = ''
    })
    
    const knappaktiv = document.getElementById(knapp)
    knappaktiv.style.backgroundColor = 'white'
    knappaktiv.style.color = 'black'
}

function Ressurser(category) {
    
    const ressurs = resources.find(resource => resource.category === category);

    document.getElementById('info').innerHTML = 
       `<h2>${ressurs.category}</h2>
        <p>${ressurs.text}</p>
        <ul>
            ${ressurs.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('')}
        </ul>`
}

document.getElementById('htmlid').addEventListener('click', function () {
    KnappeTrykk('htmlid')
    Ressurser('HTML')
})

document.getElementById('cssid').addEventListener('click', function () {
    KnappeTrykk('cssid')
    Ressurser('CSS')
})

document.getElementById('javaid').addEventListener('click', function () {
    KnappeTrykk('javaid')
    Ressurser('JavaScript')
})

document.getElementById('reactid').addEventListener('click', function () {
    KnappeTrykk('reactid')
    Ressurser('React')
})

document.getElementById('cmsid').addEventListener('click', function () {
    KnappeTrykk('cmsid')
    Ressurser('Sanity and headless CMS')
})


