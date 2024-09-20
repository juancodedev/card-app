import { sql } from '@vercel/postgres';
export async function fetchDataCards(id: string) {
    console.log('desde la query',id)
    try {
        const data = await sql`select
        card.nombre,
        card.apellido,
        card.titulo,
        card.descripcion,
        card.website,
        card.instagram,
        card.whatsapp,
        card.email,
        card.telefono from 
        card where card.id = ${id}
    `;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch');
    }
}