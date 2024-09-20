import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email } = req.body;

        try {
            const newUser = await prisma.user.create({
                data: {
                    name,
                    email,
                },
            });
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ error: 'Error creating user' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
