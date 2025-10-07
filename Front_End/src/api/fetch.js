const API_URL = 'http://localhost:4000';

export async function getWork() {
    const rep = await fetch('http://localhost:4000/api/work')
    if(!rep) throw new Error('Erreur lors du chargement des travaux')
        return rep.json();
}

