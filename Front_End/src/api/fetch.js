export async function getWork() {
    const rep = await fetch('/data/works.json')
    if(!rep) throw new Error('Erreur lors du chargement des travaux')
        return rep.json();
}