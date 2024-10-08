// components/DownloadVCardButton.tsx

"use client";
import React from 'react';

interface ContactInfo {
    fullName: string;
    organization?: string;
    title?: string;
    email?: string;
    phoneNumber?: string;
    // address?: string;
    website?: string;
}
interface DownloadVCardButtonProps {
    contact: ContactInfo;
}

const generateVCard = (contact: ContactInfo): string => {
    let vCard = `BEGIN:VCARD\nVERSION:3.0\n`;

    if (contact.fullName) vCard += `FN:${contact.fullName}\n`;
    if (contact.organization) vCard += `ORG:${contact.organization}\n`;
    if (contact.title) vCard += `TITLE:${contact.title}\n`;
    if (contact.email) vCard += `EMAIL:${contact.email}\n`;
    if (contact.phoneNumber) vCard += `TEL;TYPE=WORK,VOICE:${contact.phoneNumber}\n`;
    // if (contact.address) vCard += `ADR;TYPE=WORK:;;${contact.address}\n`;
    if (contact.website) vCard += `URL:${contact.website}\n`;

    vCard += `END:VCARD`;
    return vCard;
}

const downloadVCard = (vCardString: string, fileName: string) => {
    const blob = new Blob([vCardString], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

const DownloadVCardButton: React.FC<DownloadVCardButtonProps> = ({ contact }) => {
    
    // const contact: ContactInfo = {
    //     fullName: "Juan Muñoz Castillo",
    //     organization: "Lawen Tech Solutions",
    //     title: "Desarrollador Full-Stack",
    //     email: "juan@example.com",
    //     phoneNumber: "+56 9 1234 5678",
    //     // address: "Calle Ejemplo 123, Santiago, Chile",
    //     website: "https://juanmuñoz.dev"
    // };

    const handleDownload = () => {
        const vCardString = generateVCard(contact);
        downloadVCard(vCardString, contact.fullName.replace(/\s/g, '_').toLowerCase());
    };

    return (
        <button onClick={handleDownload} className="bg-blue-700 text-white px-4 py-2 rounded">
            Guardar Contacto
        </button>
    );
};

export default DownloadVCardButton
