import empleadosModels from "../models/empleadosModels.js";

export const getEmpleados = async(req, res) => {
    try {
        const empleado = await empleadosModels.findById(req.params.id);
        if(!empleado) return res.status(404).json({ message:'empleado no encontrado' })
        res.status(200).json(empleado)
    } catch (error) {
        console.log(error);
        res.status(500).json("Error al obtener los empleados");
    }
}

export const createEmpleados = async(req, res) => {
    try {
        const { nombre, email, sexo, area, description, rol } = req.body;

        const newEmpleados = new empleadosModels({
            nombre,
            email,
            sexo,
            area,
            description,
            rol
        });

        const savedEmpleados = await newEmpleados.save();
        res.json(savedEmpleados);

    } catch (error) {
        console.log(error);
        res.status(500).json("Error al crear el empleado");
    }
}

export const updateEmpleados = async(req, res) => {
    try {
        const empleados = await empleadosModels.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        if(!empleados) return res.status(404).json({ message: 'Empleado no actualido' })
        res.status(200).json("Nota actualizada")

    } catch (error) {
        console.log(error);
        res.status(500).json('Error en la actulización el empleado ');
    }
}

export const deleEmpleados = async (req, res) => {
    try {
        const empleados = await empleadosModels.findByIdAndDelete(req.params.id);
        if(!empleados) return res.status(404).json({ message: 'Empleado eliminada' });
        res.status(200).json('Empleado eliminada')

    } catch (error) {
        console.log(error)
        res.status(500).json('Error en eliminar el empleado')
    }
}