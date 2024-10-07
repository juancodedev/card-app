"use client"

import { useState } from "react"
import { Bell, ChevronDown, Search, User, UserPlus, Users, Edit, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'


// Simulated user data
const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User" },
    { id: 4, name: "Diana Ross", email: "diana@example.com", role: "Manager" },
    { id: 5, name: "Edward Norton", email: "edward@example.com", role: "User" },
]

export default function Component() {
    const [selectedItem, setSelectedItem] = useState("Listar Usuarios")
    const [selectedUser, setSelectedUser] = useState(null)

    const menuItems = [
        { name: "Dashboard", icon: <User className="h-4 w-4" /> },
        { name: "Crear Usuario", icon: <UserPlus className="h-4 w-4" /> },
        { name: "Listar Usuarios", icon: <Users className="h-4 w-4" /> },
    ]

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white p-4 shadow-md">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Admin Panel</h2>
                </div>
                <nav>
                    {menuItems.map((item) => (
                        <Button
                            key={item.name}
                            variant={selectedItem === item.name ? "secondary" : "ghost"}
                            className="mb-2 w-full justify-start"
                            onClick={() => setSelectedItem(item.name)}
                        >
                            {item.icon}
                            <span className="ml-2">{item.name}</span>
                        </Button>
                    ))}
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Top navigation bar */}
                <header className="bg-white p-4 shadow-md">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold">{selectedItem}</h1>
                        <div className="flex items-center space-x-4">
                            <form className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                                <Input className="pl-8" placeholder="Buscar..." type="search" />
                            </form>
                            <Button variant="ghost" size="icon">
                                <Bell className="h-5 w-5" />
                                <span className="sr-only">Ver notificaciones</span>
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <Image
                                            src="/paceholder.svg"
                                            width={32}
                                            height={32}
                                            alt="Avatar"
                                            style={{ aspectRatio: "32/32", objectFit: "cover" }}
                                            className="rounded-full"
                                        />
                                        <ChevronDown className="ml-2 h-4 w-4" />
                                        <span className="sr-only">Toggle user menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Perfil</DropdownMenuItem>
                                    <DropdownMenuItem>Configuración</DropdownMenuItem>
                                    <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </header>

                {/* Main content area */}
                <main className="flex-1 overflow-y-auto p-4">
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Listado de Usuarios</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Nombre</TableHead>
                                                <TableHead>Email</TableHead>
                                                <TableHead>Rol</TableHead>
                                                <TableHead>Acciones</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {users.map((user) => (
                                                <TableRow key={user.id} onClick={() => setSelectedUser(user)}>
                                                    <TableCell>{user.name}</TableCell>
                                                    <TableCell>{user.email}</TableCell>
                                                    <TableCell>{user.role}</TableCell>
                                                    <TableCell>
                                                        <Button variant="ghost" size="icon">
                                                            <Edit className="h-4 w-4" />
                                                        </Button>
                                                        <Button variant="ghost" size="icon">
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                        <div>
                            {selectedUser && (
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Detalles del Usuario</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-col items-center">

                                            <Image
                                                src="/paceholder.svg"
                                                width={128}
                                                height={128}
                                                alt={`Avatar de ${selectedUser.name}`}
                                                style={{ aspectRatio: "128/128", objectFit: "cover" }}
                                                className="mb-4 rounded-full"

                                            />
                                            <h3 className="text-lg font-semibold">{selectedUser.name}</h3>
                                            <p className="text-sm text-gray-500">{selectedUser.email}</p>
                                            <p className="mt-2 text-sm font-medium">{selectedUser.role}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}