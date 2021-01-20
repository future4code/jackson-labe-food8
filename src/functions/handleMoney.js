const handleMoney = (number) => {
    const money = number.toFixed(2).replace('.',',')
    return `R$${money}`
}

export default handleMoney

