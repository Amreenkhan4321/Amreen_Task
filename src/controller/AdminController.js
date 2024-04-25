import { Admin } from "../model/Admin.js";

// user register api
const adminRegister  = async (req, res) => {
    try {
      let { name, email, password, phoneNumber ,profile} = req.body;
  
      if (!name || !email || !password || !phoneNumber ) {
        return res.status(400).json({ message: 'All fields are required' });
    }
  
      const findAdmin = await Admin.findOne({ email });
      const isNumber = await Admin.findOne({ phoneNumber });
  
      if (findAdmin) {
     
        return res.status(400).json({ message: 'Email already registered' });
 
      }
      if (isNumber) {
      
        return res.status(400).json({ message: 'Mobile' });
 
      }
    //   password = await hashPassword(password);
      let newAdmin = new Admin({
        name,
        email,
        password,
        phoneNumber,
      });
      await newAdmin.save();
    
      res.status(201).json({ message: 'Admin registered successfully', admin: newAdmin });
    } catch (error) {
      return createError(res, error);
    }
  };



  export { adminRegister}