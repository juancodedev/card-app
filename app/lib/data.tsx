import { sql } from '@vercel/postgres';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function fetchDataCards(id: string) {
    console.log('Busco el ID:',id)
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
    revalidatePath("/dashboard/invoices");
    redirect("/dashboard/invoices");
}