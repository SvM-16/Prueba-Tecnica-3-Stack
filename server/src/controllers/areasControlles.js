import db from '../config/db.js'

export function obtenerAreas (req, res){
    const sql = 'SELECT * FROM areas';
    
    db.query(sql, (error, results) => {
        if(error){
            console.error('Eroro al obtener los areas', error);
            res.status(500).json({error:'error al obtener los areas'})
        }
        res.status(200).json(results)
    })
}