const db = require("../db/db");

module.exports = {
  List: async (req, res) => {
    try {
      const { text } = req.body;
      const data = [text];
      console.log(data);
      const sql = "insert into list(`text`) value(?)";
      const conn = await db.getConnection();
      const [rows] = await conn.query(sql, data);
      conn.release();
      return res.status(200).json({ result: rows });
    } catch (error) {
      throw error;
    }
  },

  Read: async (req, res) => {
    try {
      const conn = await db.getConnection();
      const sql = "select * from list";
      const [rows] = await conn.query(sql);
      res.status(200).json({ result: rows });
      conn.release();
    } catch (error) {
      throw error;
    }
  },

  Change: async (req, res) => {
    try {
      const { idx, text } = req.body;
      console.log(idx, text);
      const conn = await db.getConnection();
      const sql = "update list set text=? where idx=?";
      const data = [text, idx];
      const [rows] = await conn.query(sql, data);
      conn.release();
      res.status(200).json({ result: rows });
    } catch (error) {
      throw error;
    }
  },
  Delete: async (req, res) => {
    try {
      const { idx } = req.body;
      const data = [idx];
      console.log(data);
      const conn = await db.getConnection();
      const sql = "delete from list where idx = ?";
      const [rows] = await conn.query(sql, data);
      res.status(200).json({ result: rows });
      conn.release();
    } catch (error) {
      throw error;
    }
  },
};
