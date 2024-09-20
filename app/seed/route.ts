import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const {
            webSite,
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
            imgPortada
        } = await request.json();

        const newCard = await prisma.card.create({
            data: {
                webSite,
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
                imgPortada,
            },
        });

        return NextResponse.json(newCard);
    } catch (error) {
        return NextResponse.json({ error: 'Error creating card' }, { status: 500 });
    }
}
