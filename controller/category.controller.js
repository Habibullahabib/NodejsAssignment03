import CategoryModel from "../models/Category.model.js";

class categoryController{
    static createCategory = (req, res) =>{
        const result = new CategoryModel({
        category_title:req.body.title,
        feature_image:req.file.filename,
    });
    result.save((err) => {
        if(err) {
            console.log(err);
        }
        else{
            console.log("data added successfully");
        };
        res.redirect("/");
      
    }) 

    };

    static getCategoryForm = async(req, res) =>{
        try {
            res.render("CategoryForm");
            

             
        } catch (error) {
            console.log(error)
        }
         
         
    };

    static getAllCategory = async (req, res) =>{
        try {
            const category = await CategoryModel.find()
             
            res.render("allCategory", {category_list: category})
           
           
        } catch (error) {
            console.log(error)
        }

        
    };

     

}
export default categoryController;