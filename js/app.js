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

function visualizzaPrezzoDaTitolo() {
    const titolo = document.getElementById('vediTitolo').value;
    let indice = cercaLibroPerTitolo(titolo);

    console.log(indice)

    if (indice >= 0) {

        console.log(indice)

        // print: book(i).price 

    } else {
        // print: libro 404
    }
}

function cambiaPrezzo() {
    const codice = document.getElementById('modificaCodice').value;
    let indice = cercaLibroPerCodice(codice);

    if (indice >= 0) {
        const nuovoPrezzo = document.getElementById('nuovoPrezzo').value;
    
        libri[indice].prezzo = nuovoPrezzo;

        aggiornaLibri();
        calcolaPrezzoMedio();

        // print: aggornato libro(ID)

    } else {
        // print: libro 404
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

        // print: rimosso libro(ID)

    } else {
        // print: libro 404
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