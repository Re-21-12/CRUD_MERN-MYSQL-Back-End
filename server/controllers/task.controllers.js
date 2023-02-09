import { Router } from "express";
import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  try{  const [result] = await pool.query(
    "SELECT * FROM tasks ORDER BY createAt ASC"
  );

  res.json(result);
}catch(error){
  res.status(500).json({"message": error.message})
}

};

export const getTask = async (req, res) => {
try{
  const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
    req.params.id,
  ]);
  //result es un arreglo por eso lo medimos con metodo length
  if (result.length == 0 ){
    return res.status(404).json({"message": "task not found"})
  }
  res.json(result[0]);
}catch(error){
  res.status(500).json({"message": error.message})
}
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  try{
    
  const [result] = await pool.query(
    "INSERT INTO tasks(title,description) VALUES (?,?)",
    [title, description]
  );
  console.log(result);
  res.json({
    id: result.insertId,
    title,
    description,
  });
  }catch(error){
    res.status(500).json({"message": error.message})
  }
};

export const updateTasks =async (req, res) => {
  const { title, description } = req.body;
  try{
    const [result] = await pool.query(
      "UPDATE tasks SET ? WHERE id = ?",[req.body, req.params.id]
    );
    res.json(result);
  } catch(error){
    res.status(500).json({"message": error.message})
  }
};

export const deleteTask = async(req, res) => {
 try{
  const [result] = await pool.query(
    "DELETE FROM tasks WHERE id = ?",[req.params.id]
  );

 if(result.affectedRows == 0){
  return res.status(404).json({"message": "task not found"})
 }
 }catch(error){
  res.status(500).json({"message": error.message})
 }
};
