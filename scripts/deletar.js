function deletar(id) {
    fetch(url + '/delete/' + id, {
        method: 'DELETE',
    })
        .then(res => res.text())
        .then(res => console.log(res))
}

function deletartodos() {
    fetch(url + '/delete', {
        method: 'DELETE',
    })
        .then(res => res.text())
        .then(res => console.log(res))
}