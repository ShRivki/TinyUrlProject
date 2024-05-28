import links from "../Models/LinkModel.js";
import users from "../Models/LinkModel.js";
const LinksController = {
  getList: async (req, res) => {
    try {
      const list = await links.find();//ללא סינון
      res.json({ list });
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
    const { userId } = req.body;
    try {
      const user = await users.findById(userId);
      if (!user)
        return res.status(401).json({ message: " the user not found" });
      const newLink = await links.create(req.body);//הוספת חדש
      user.links.push(newLink.id);
      await user.save();
      res.json(newLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { originalUrl, userId } = req.body;
    try {
      // const user= await users.findById(userId);
      // if(!user)
      //   return res.status(401).json({ message: " the user not found" });
      const updatedLink = await links.findByIdAndUpdate(id, req.body, {
        originalUrl: originalUrl,
      }, { new: true });//עדכון לפי מזהה
      res.json(updatedLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id, userId } = req.params;
    try {
      const user = await users.findById(userId);
      if (!user)
        return res.status(401).json({ message: " the user not found" });
      const deleted = await links.findByIdAndDelete(id);//מחיקה לפי מזהה
      user.links.remove(id);
      await user.save();
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
  getClickInformation:async (req, res) =>{
    try {
      const link = await links.findById(req.params.id);//שליפה לפי מזהה
      const clickModel={
        targetName:String,
        count:Number
    } 
    const arr=[];
    link.targetValues.forEach(element => {
      arr.push({"name":element.name,"value":0})
    });
    link.clicks.forEach(click => {
        const a=arr.find(e=>e.name==click.targetParamValue)
        a.value++;
    });
      res.json(arr);

    } catch (e) {
      res.status(400).json({ message: e.message });
    }

  }
};


export default LinksController;
