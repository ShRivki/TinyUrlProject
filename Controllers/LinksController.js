import links from "../Models/LinkModel.js";
const LinksController = {
    getList: async (req, res) => {
      try {
        const list = await links.find();//ללא סינון
        res.json({ list});
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
  
    getById: async (req, res) => {
      try {
        const link = await links.findById(req.params.id);//שליפה לפי מזהה
        res.json(link);
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
  
    add: async (req, res) => {
      const { originalUrl } = req.body;
      try {
        const newLink = await links.create({ originalUrl });//הוספת חדש
        res.json(newLink);
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
  
    update: async (req, res) => {
      const { id } = req.params;
      // const { originalUrl } = req.body;
      try {
        const updatedLink = await links.findByIdAndUpdate(id, req.body, {
          originalUrl: originalUrl,
        });//עדכון לפי מזהה
        res.json(updatedLink);
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
  
    delete: async (req, res) => {
      const { id } = req.params;
      try {
        const deleted = await links.findByIdAndDelete(id);//מחיקה לפי מזהה
        res.json(deleted);
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    },
  };
  
  export default LinksController;
  