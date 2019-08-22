import { Request, Response } from 'express';
import pool from '../db';

class CursosPensumsController{

    public async getAllCursosPensums (req:Request, res:Response) {
        const rows = await pool.query('select * from bot_cursos_pensums where za_carrera = ' + req.params.za_carrera + ' and ano_pensum = ' + req.params.ano_pensum);
        res.json(rows[0]);
    }

    public async getUnoCursosPensums (req:Request, res:Response) {
        const rows = await pool.query('select * from bot_cursos_pensums where za_carrera = ' + req.params.za_carrera + ' and ano_pensum = ' + req.params.ano_pensum + ' and za_curso =' + req.params.za_curso);
        res.json(rows[0]);
    }

    public async opcionesCursosPensums (req:Request, res:Response) {
        await pool.query('select * from bot_cursos_pensums where za_carrera = ' + req.params.za_carrera + ' and ano_pensum = ' + req.params.ano_pensum + ' and za_curso =' + req.params.za_curso);
        res.json({text: "Operación realizada exitosamente!!!"});
    }

}

const cursosPensumsController = new CursosPensumsController();
export default cursosPensumsController;