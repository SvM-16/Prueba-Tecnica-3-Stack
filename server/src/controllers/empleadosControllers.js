import db from '../config/db.js'

export function createEmpleado (req, res){

        const empleadoData = req.body;

        const sql = 'INSERT INTO empleado (nombre, email, sexo, area_id, boletin, descripcion) VALUES (?, ?, ?, ?, ?, ?)';

        db.query(sql, [empleadoData.nombre, empleadoData.email, empleadoData.sexo, empleadoData.area_id, empleadoData.boletin, empleadoData.descripcion], (error)=>{
            if(error){
                console.error('Erroe el crear empleado: ', error);
                return res.status(500).json({ error: 'Error al crear el empleado' });
            }
            res.status(201).json({ message: 'Empleado creado' });
        })
}

export function getEmpleados(req, res) {

        const sql = 'SELECT * FROM empleado';

        db.query(sql, (error, results) => {
            if (error) {
                console.error('Error al obtener empleados: ', error);
                return res.status(500).json({ error: 'Error al obtener empleados' });
            }
            res.status(200).json(results);
        });
}

export function getEmpleadoId(req, res) {

        const empleadoId = req.params.id;

        const sql = 'SELECT * FROM empleado WHERE id = ?';

        db.query(sql, [empleadoId], (error, results) => {
            if (error) {
                console.error('Error al obtener el empleado: ', error);
                return res.status(500).json({ error: 'Error al obtener el empleado' });
            }
            if (results.length === 0) {
                return res.status(404).json({ message: 'Empleado no encontrado' });
            }
            res.status(200).json(results[0]);
        });
}

export function updateEmpleado(req, res) {

        const empleadoId = req.params.id;

        const empleadoData = req.body;

        const sql = 'UPDATE empleado SET nombre = ?, email = ?, sexo = ?, area_id = ?, boletin = ?, descripcion = ? WHERE id = ?';

        db.query(sql, [empleadoData.nombre, empleadoData.email, empleadoData.sexo, empleadoData.area_id, empleadoData.boletin, empleadoData.descripcion, empleadoId], (error, results) => {
            if (error) {
                console.error('Error al actualizar el empleado: ', error);
                return res.status(500).json({ error: 'Error al actualizar el empleado' });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ message: 'Empleado no encontrado' });
            }
            res.status(200).json({ message: 'Empleado actualizado' });
        });
}

export function deleteEmpleado(req, res) {
    
    const empleadoId = req.params.id;

    const sql = 'DELETE FROM empleado WHERE id = ?';

    db.query(sql, [empleadoId], (error, results) => {
        if (error) {
            console.error('Error al eliminar el empleado: ', error);
            return res.status(500).json({ error: 'Error al eliminar el empleado' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        res.status(200).json({ message: 'Empleado eliminado' });
    });
}