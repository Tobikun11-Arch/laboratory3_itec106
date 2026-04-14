import pool from '../config/db.js';

export const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM students');
    res.status(200).json({users: rows});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

export const getUserById = async (req, res) => {
  const {id} = req.params;

  try {
    const [rows] = await pool.query('SELECT * FROM students WHERE id = ?', [
      id
    ]);

    if (rows.length === 0) {
      return res.status(404).json({error: 'User not found'});
    }

    res.status(200).json({user: rows[0]});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
