const CurrencyText = ({ price, currency = 'USD', digit = 2 }) => {
  return (
    new Intl.NumberFormat("en", {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: digit,
    }).format(price)
  )
}

export default CurrencyText;