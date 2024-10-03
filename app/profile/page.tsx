'use client'

import { useState } from 'react'
import { X, Camera, QrCode, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function Component() {
    const [socialInputs, setSocialInputs] = useState([
        { enabled: true },
        { enabled: true },
        { enabled: true }
    ])

    const addSocialInput = () => {
        setSocialInputs([...socialInputs, { enabled: true }])
    }

    const toggleSocialInput = (index: number) => {
        const newInputs = [...socialInputs]
        newInputs[index].enabled = !newInputs[index].enabled
        setSocialInputs(newInputs)
    }

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl sm:text-2xl font-bold">Plan X</h1>
                    <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
                        <X className="h-4 w-4 sm:h-6 sm:w-6" />
                    </Button>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-2/3 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="name">Nombre</Label>
                                <Input id="name" placeholder="Tu nombre" />
                            </div>
                            <div>
                                <Label htmlFor="address">Dirección</Label>
                                <Input id="address" placeholder="Tu dirección" />
                            </div>
                            <div>
                                <Label htmlFor="phone">Teléfono</Label>
                                <Input id="phone" placeholder="Tu teléfono" />
                            </div>
                            <div>
                                <Label htmlFor="country">País</Label>
                                <Input id="country" placeholder="Tu país" />
                            </div>
                            <div>
                                <Label htmlFor="profession">Profesión</Label>
                                <Input id="profession" placeholder="Tu profesión" />
                            </div>
                            <div>
                                <Label htmlFor="interests">Intereses</Label>
                                <Input id="interests" placeholder="Tus intereses" />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="description">Breve descripción</Label>
                            <Textarea id="description" placeholder="Cuéntanos sobre ti" />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 flex justify-center items-start">
                        <div className="relative">
                            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gray-200 overflow-hidden">
                                <img src="/placeholder.svg" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <Button variant="secondary" size="icon" className="absolute bottom-0 right-0 rounded-full h-8 w-8 sm:h-10 sm:w-10">
                                <Camera className="h-4 w-4 sm:h-5 sm:w-5" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 space-y-4">
                    {socialInputs.map((input, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                            <Input
                                placeholder="Red social"
                                disabled={!input.enabled}
                                className={`w-full sm:w-auto ${input.enabled ? '' : 'bg-gray-100'}`}
                            />
                            <Select disabled={!input.enabled}>
                                <SelectTrigger className="w-full sm:w-[180px]">
                                    <SelectValue placeholder="Selecciona red social" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="facebook">Facebook</SelectItem>
                                    <SelectItem value="twitter">Twitter</SelectItem>
                                    <SelectItem value="instagram">Instagram</SelectItem>
                                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="flex items-center space-x-2">
                                <Switch
                                    checked={input.enabled}
                                    onCheckedChange={() => toggleSocialInput(index)}
                                    className={`${input.enabled ? 'bg-green-500' : 'bg-red-500'} w-9 h-5`}
                                >
                                    <span className="sr-only">Toggle social input</span>
                                </Switch>
                                <span className="text-sm text-gray-500">{input.enabled ? 'Habilitado' : 'Deshabilitado'}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <Button onClick={addSocialInput} className="mt-6 mx-auto block">
                    <Plus className="mr-2 h-4 w-4" /> Agregar
                </Button>

                <div className="mt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <Button variant="outline" className="w-full sm:w-auto">Prev</Button>
                    <Button variant="outline" className="w-full sm:w-auto">
                        <QrCode className="mr-2 h-4 w-4" /> QR
                    </Button>
                    <Button className="w-full sm:w-auto">Guardar</Button>
                </div>
            </div>
        </div>
    )
}