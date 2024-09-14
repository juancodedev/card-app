// /pages/[id].tsx

import { useRouter } from 'next/router';

export default function ItemPage() {
    const router = useRouter();
    const { id } = router.query as { id: string }; // Obtener el ID de la URL


    return (
        <div>
            <h1>ID capturado: {id}</h1>
        </div>
    );
}
