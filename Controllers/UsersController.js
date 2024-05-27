import users from "../Models/UserModel.js";
import LinksController from "./LinksController.js";
const UsersController = {
  getList: async (req, res) => {
    try {
      const list = await users.find()//.select('-links');//ללא סינון
      res.json(list);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getById: async (req, res) => {
    try {
      const user = await users.findById(req.params.id);//שליפה לפי מזהה
      res.json(user);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  add: async (req, res) => {
    //const { name, email, password } = req.body;
    try {
      const newUser = await users.create(req.body);//הוספת חדש
      res.json(newUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
  
    try {
      const updatedUser = await users.findByIdAndUpdate(id, req.body, { new: true })
      res.json(updatedUser)
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await users.findByIdAndDelete(id);//מחיקה לפי מזהה
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};

export default UsersController;
