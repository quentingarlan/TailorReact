export const formatNumber = number => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(number);
}
export const formatFrNumber = number => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(number);
}