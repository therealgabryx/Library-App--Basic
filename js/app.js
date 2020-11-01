let libri = [
    {
        titolo: 'aaa',
        autore: 'aaa',
        prezzo: 10,
        codice: 'ID-A'
    },
    {
        titolo: 'ccc',
        autore: 'ccc',
        prezzo: 15,
        codice: 'ID-C'
    },
    {
        titolo: 'bbb',
        autore: 'bbb',
        prezzo: 10,
        codice: 'ID-B'
    },
] 

function aggiungiUnLibro() {
    const titolo = document.getElementById('aggiungiTitolo');
    const autore = document.getElementById('aggiungiAutore');
    const prezzo = document.getElementById('aggiungiPrezzo');

    if (titolo.value != '' && autore.value != '' && prezzo.value > 0) { 

        libri.push({ 
            titolo: titolo.value,
            autore: autore.value,
            prezzo: prezzo.value,
            codice: new Date().getTime() 
        }) 

        aggiornaLibri();
        calcolaPrezzoMedio();

        const aggFeedback = document.getElementById('aggFeedback');
        aggFeedback.innerText = 'Libro aggiunto!'

        titolo.value = ''
        autore.value = ''
        prezzo.value = ''

    } else { 
        const aggFeedback = document.getElementById('aggFeedback');
        aggFeedback.innerText = 'Controlla le informazioni inserite!'
    } 
} 

function visualizzaPrezzoDaTitolo() {
    const titolo = document.getElementById('vediTitolo').value;
    let indice = cercaLibroPerTitolo(titolo);

    console.log(indice)

    if (indice >= 0) {

        console.log(indice)

        const viewFeedback = document.getElementById('viewFeedback');
        viewFeedback.innerText = `Il libro '${libri[indice].titolo}' costa ${libri[indice].prezzo}€`

    } else {
        const viewFeedback = document.getElementById('viewFeedback');
        viewFeedback.innerText = 'Libro non trovato!'
    }
}

function cambiaPrezzo() {
    const codice = document.getElementById('modificaCodice').value;
    let indice = cercaLibroPerCodice(codice);

    if (indice >= 0) {
        const nuovoPrezzo = document.getElementById('nuovoPrezzo').value;

        if (nuovoPrezzo != '') {
            libri[indice].prezzo = nuovoPrezzo;

            aggiornaLibri();
            calcolaPrezzoMedio();

            const modFeedback = document.getElementById('modFeedback');
            modFeedback.innerText = 'Prezzo aggiornato!'

        } else {
            const modFeedback = document.getElementById('modFeedback');
            modFeedback.innerText = 'Controlla le informazioni inserite!'
        }

    } else {
        const modFeedback = document.getElementById('modFeedback');
        modFeedback.innerText = 'Libro non trovato!'
    }
}

function eliminaLibro() {
    const codice = document.getElementById('eliminaCodice').value;
    let indice = cercaLibroPerCodice(codice);
    
    if(indice >= 0) {
        let removed = libri.splice(indice, 1);
        console.log('rimosso libro: ' + JSON.stringify(removed))

        aggiornaLibri();
        calcolaPrezzoMedio();

        const delFeedback = document.getElementById('delFeedback');
        delFeedback.innerText = 'Libro eliminato!'

    } else {
        const delFeedback = document.getElementById('delFeedback');
        delFeedback.innerText = 'Libro non trovato!'
    }
}

function cercaLibroPerCodice(codice) {
    let indice = -1
    
    libri.forEach(libro => {
        if (libro.codice == codice) {
            indice = libri.indexOf(libro);
        }
    })

    return indice;
}

function cercaLibroPerTitolo(titolo) {
    let indice = -1
    
    libri.forEach(libro => {
        if (libro.titolo == titolo) {
            indice = libri.indexOf(libro);
        }
    })

    return indice;
}

function aggiornaLibri() {
    const visualizzaLibri = document.getElementById('visualizzaLibri');

    ordinaLibri();
    calcolaPrezzoMedio()

    let libriOutput = '';
    for(let i = 0; i < libri.length; i++ ) {
        libriOutput += `<div class="libro">
                            <div class="info">
                                <h4>titolo:</h4>
                                <p>${libri[i].titolo}</p>
                            </div>
                            <div class="info">
                                <h4>autore:</h4>
                                <p>${libri[i].autore}</p>
                            </div>
                            <div class="info">
                                <h4>ID:</h4>
                                <p>${libri[i].codice}</p>
                            </div>
                            <div class="info">
                                <h4>prezzo: </h4>
                                <p>${libri[i].prezzo}€</p>
                            </div>
                        </div>`
    }

    visualizzaLibri.innerHTML = libriOutput;
}

function ordinaLibri() {
    libri.sort((a, b) => {
        if (a.autore > b.autore) {
            return 1
        } 
        else {
            return -1
        }
    }) 
} 

function calcolaPrezzoMedio() {
    const prezzoMedio = document.getElementById('prezzoMedio');

    let totale = 0;
    for (let i = 0; i < libri.length; i++) {
        totale += parseInt(libri[i].prezzo);
    }

    let media = parseInt(totale/libri.length);

    prezzoMedio.innerText = `${media}€`
}