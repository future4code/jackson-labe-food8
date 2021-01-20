const convertTimestampToDate = (timestamp) => {
    const dateString = new Date(timestamp).toLocaleDateString()
    const dateArray = dateString.split('/');

    switch (dateArray[1]) {
        case "1": 
        dateArray[1] = "janeiro"
        break
        case "2":
        dateArray[1] = "fevereiro"
        break
        case "3":
        dateArray[1] = "março"
        break
        case "4":
        dateArray[1] = "abril"
        break
        case "5":
        dateArray[1] = "maio"
        break
        case "6":
        dateArray[1] = "junho"
        break
        case "7":
        dateArray[1] = "julho"
        break
        case "8":
        dateArray[1] = "agosto"
        break
        case "9":
        dateArray[1] = "setembro"
        break
        case "10":
        dateArray[1] = "outubro"
        break
        case "11":
        dateArray[1] = "novembro"
        break
        case "12":
        dateArray[1] = "dezembro"
        break
        default:
        alert("Tivemos um erro carregando a data de seus últimos pedidos!")
    }

    const dateOfOrder = dateArray.join(' ')
    return dateOfOrder
}

export default convertTimestampToDate