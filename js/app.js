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


function eliminaLibro() {
    const codice = document.getElementById('codice').value;
    let indice = cercaLibroPerCodice(codice);

    console.log(libri)
    
    let removed = libri.splice(indice, 1);
    console.log('rimosso libro: ' + JSON.stringify(removed))

    aggiornaLibri();
    calcolaPrezzoMedio();

    console.log(libri)

    /* let tit = cercaLibroPerTitolo('aaa')   */
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
                                <p>${libri[i].prezzo}</p>
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
        totale += libri[i].prezzo;
    }

    let media = parseInt(totale/libri.length);

    prezzoMedio.innerText = `${media}€`
}