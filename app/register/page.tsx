import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <Input placeholder="Username" type="text" />
          </div>
          <div>
            <Input placeholder="E-mail" type="email" />
          </div>
          <div>
            <Input placeholder="Password" type="password" />
          </div>
          <div>
            <Input placeholder="Confirm Password" type="password" />
          </div>
          <Button className="w-full">Create Account</Button>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <Button variant="outline" className="w-full">
              <FaFacebook className="w-5 h-5 text-blue-600" />
            </Button>
            <Button variant="outline" className="w-full">
              <FaGoogle className="w-5 h-5 text-red-600" />
            </Button>
            <Button variant="outline" className="w-full">
              <FaTwitter className="w-5 h-5 text-blue-400" />
            </Button>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}