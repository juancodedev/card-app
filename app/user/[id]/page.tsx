
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0kBhrgyXPpI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { useState, useEffect } from 'react'
import { Button } from "@/app/components/ui/button"
import Image from 'next/image'
import { fetchDataCards } from '@/app/lib/data'
import { JSX, SVGProps } from 'react'

export default async function PageUserId({
    params,
}: {
    params: { id: string }
}) {
    const { id } = params
    const dataCard = await fetchDataCards(id)
    const data = dataCard[0]
    console.log(data)
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <div className="flex justify-center mb-6">
                    <Image
                        src="/paceholder.svg"
                        width={200}
                        height={200}
                        alt="Logo usuario"
                        style={{ aspectRatio: "200/200", objectFit: "cover" }}
                        className="w-40 h-40 rounded-full"

                    />

                </div>
                <h1 className="text-2xl font-bold text-center mb-2 text-black"> {data.nombre} {data.apellido} </h1>
                <p className="text-center text-gray-600 mb-4"> {data.titulo} </p>
                <div className="space-y-3">
                    <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg text-slate-500 hover:bg-slate-100 active:bg-slate-400 focus:outliine-none focus:ring focus:ring-slate-300">
                        <GlobeIcon className="w-6 h-6 text-blue-500" />
                        <a href={`http://${data.website}`} target="blank" className="text-gray-800">
                            {data.website}
                        </a>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg  hover:bg-slate-100 active:bg-slate-400 focus:outliine-none focus:ring focus:ring-slate-300">
                        <InstagramIcon className="w-6 h-6 text-pink-500" />
                        <a href= {`http://www.instagram.com/${data.instagram}`} target="blank" className="text-gray-800">
                        
                            @{data.instagram}
                        </a>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg  hover:bg-slate-100 active:bg-slate-400 focus:outliine-none focus:ring focus:ring-slate-300">
                        <PhoneIcon className="w-6 h-6 text-green-500" />
                        <a href={`http://wa.me/${data.whatsapp}`} target="blank" className="text-gray-800">
                            {data.whatsapp}
                        </a>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg  hover:bg-slate-100 active:bg-slate-400 focus:outliine-none focus:ring focus:ring-slate-300">
                        <MailIcon className="w-6 h-6 text-red-500" />
                        <a href=  {`mailto:${data.email}`} className="text-gray-800">
                            {data.email}
                        </a>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg  hover:bg-slate-100 active:bg-slate-400 focus:outliine-none focus:ring focus:ring-slate-300">
                        <PhoneIcon className="w-6 h-6 text-blue-500" />
                        <a href=  {`tel:${data.telefono}`} className="text-gray-800"> +{data.telefono} </a>
                    </div>
                </div>
                <div className="mt-6">
                    <Button className="w-full bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">Guardar Contacto</Button>
                </div>
            </div>
        </div>
    )
}

function GlobeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    )
}


function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}


function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}


function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}