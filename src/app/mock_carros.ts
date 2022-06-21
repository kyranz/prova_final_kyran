import { carro } from './carros';

function RndID() {
    return Math.floor(Math.random() * (99999 - 10000) + 10000);
}   

export const carros: carro[] = [
    {codigo: RndID(), modelo: 'Celta', preco: 20000, ano_fabr: 2015},
    {codigo: RndID(), modelo: 'Uno', preco: 20000, ano_fabr: 2015},
    {codigo: RndID(), modelo: 'Onyx', preco: 20000, ano_fabr: 2015},
    {codigo: RndID(), modelo: 'Tesla S', preco: 20000, ano_fabr: 2015},
    {codigo: RndID(), modelo: 'Ford K', preco: 20000, ano_fabr: 2015},
]