/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0kBhrgyXPpI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <img
            src="/placeholder.svg"
            alt="TUK Logo"
            className="w-40 h-40 rounded-full"
            width="200"
            height="200"
            style={{ aspectRatio: "200/200", objectFit: "cover" }}
          />
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">TUK</h1>
        <p className="text-center text-gray-600 mb-4">Tu subtitulo aquí</p>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg">
            <GlobeIcon className="w-6 h-6 text-blue-500" />
            <a href="#" className="text-gray-800">
              www.tuk.cl
            </a>
          </div>
          <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg">
            <InstagramIcon className="w-6 h-6 text-pink-500" />
            <a href="#" className="text-gray-800">
              @tuk.cl
            </a>
          </div>
          <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg">
            <PhoneIcon className="w-6 h-6 text-green-500" />
            <a href="#" className="text-gray-800">
              Enviar WhatsApp
            </a>
          </div>
          <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg">
            <MailIcon className="w-6 h-6 text-red-500" />
            <a href="#" className="text-gray-800">
              contacto@tuk.cl
            </a>
          </div>
          <div className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg">
            <PhoneIcon className="w-6 h-6 text-blue-500" />
            <span>+569 2642 4279</span>
          </div>
        </div>
        <div className="mt-6">
          <Button className="w-full bg-blue-600 text-white">Guardar Contacto</Button>
        </div>
      </div>
    </div>
  )
}

function GlobeIcon(props) {
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


function InstagramIcon(props) {
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


function MailIcon(props) {
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


function PhoneIcon(props) {
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