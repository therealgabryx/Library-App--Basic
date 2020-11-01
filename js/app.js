let libri = [
    {
        titolo: 'aaa',
        autore: 'aaa',
        prezzo: 10,
        id: 'ID-A'
    },
    {
        titolo: 'ccc',
        autore: 'ccc',
        prezzo: 10,
        id: 'ID-C'
    },
    {
        titolo: 'bbb',
        autore: 'bbb',
        prezzo: 10,
        id: 'ID-B'
    },
] 

function aggiornaLibri() {
    const visualizzaLibri = document.getElementById('visualizzaLibri');
    ordinaLibri();

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
                                <p>${libri[i].id}</p>
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