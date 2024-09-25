import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const {
            website,
            instagram,
            twitter,
            github,
            email,
            telefono,
            whatsapp,
            linkedin,
            facebook,
            nombre,
            apellido,
            titulo,
            descripcion,
            img,
            imgportada
        } = await request.json();

        const newCard = await prisma.card.create({
            data: {
                website,
                instagram,
                twitter,
                github,
                email,
                telefono,
                whatsapp,
                linkedin,
                facebook,
                nombre,
                apellido,
                titulo,
                descripcion,
                img,
                imgportada,
            },
        });


        return NextResponse.json(newCard);
    } catch (error) {
        return NextResponse.json({ error: 'Error creating card' }, { status: 500 });
    }
}
