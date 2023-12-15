export default async function haeLista() {
    const res = await fetch('https://api.porssisahko.net/v1/latest-prices.json');
    return res.json();
}