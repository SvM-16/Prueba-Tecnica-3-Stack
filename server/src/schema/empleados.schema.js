import {z} from 'zod';

export const crearEmpleado = z.object({
    nombre: z.string({
        required_error:"Nombre se requiere"
    }),
    email: z.string({
        required_error:"email se requiere"
    }),
    sexo: z.string({
        required_error:"sexo se requiere"
    }),
    area_id: z.string({
        required_error:"area se requiere"
    }),
    boletin: z.string({
        required_error:"boletin se requiere"
    }),
    descripcion: z.string({
        required_error:"la descripcion se requiere"
    })
})