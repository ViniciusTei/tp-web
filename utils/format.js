function formatMoney(value) {
  const priceFormat = new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL'
  })

  return priceFormat.format(value)
}

function formatDate(date) {
  let objectDate = new Date(date);


  let day = objectDate.getDate();

  let month = objectDate.getMonth() + 1;

  let year = objectDate.getFullYear();
  
  return `${day}/${month}/${year}`
}

module.exports = {
  formatMoney,
  formatDate
}