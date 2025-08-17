export default function formatPrice (priceCents) {
    if(priceCents === 0) {
        return 'Free';
    }
    else {
        return `$${(priceCents / 100).toFixed(2)}`;
    }
}