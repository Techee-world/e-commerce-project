import Product from '../moduls/itemsList.js'

export const AddItems = async (req, res, next) => {
   try {
     const listing = await Product.create(req.body);
     return res.status(201).json(listing);
   } catch (error) {
     next(error);
   }
};
