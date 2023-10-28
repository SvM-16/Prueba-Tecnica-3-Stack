import db from '../config/db.js'

export function getRoles (req, res){
    const sql = 'SELECT * FROM roles';
    
    db.query(sql, (error, results) => {
        if(error){
            console.error('Eroro al obtener los roles', error);
            res.status(500).json({error:'error al obtener los roles'})
        }
        res.status(200).json(results)
    })
}