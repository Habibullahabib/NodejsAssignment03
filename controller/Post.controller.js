
import PostModel from "../models/Post.model.js";
import CategoryModel from "../models/Category.model.js";
 

class  postController {
     
    static createPost = (req, res) =>{
        const post = new PostModel({
        post_title:req.body.title,
        post_author:req.body.author,
        post_category:req.body.category,
        post_description:req.body.description,
        feature_image:req.file.filename,
    });
    post.save((err) => {
        if(err) {
            console.log(err);
        }
        else{
            console.log("data added successfully");
        };
        res.redirect("/");
    }) 

    }
    static Homepage = async(req, res) =>{
        try {
            var result = await PostModel.find()
            var category = await CategoryModel.distinct("category_title")
            var mobiles =await PostModel.find( {post_category: 'Mobile'})
            var laptops =await PostModel.find( {post_category: 'Laptop'})
            var cosmetics =await PostModel.find( {post_category: 'Cosmetics'})
             
            
             
            res.render("Home", {data: result, mobiles:mobiles, 
                cosmetics:cosmetics, laptops:laptops, category_list: category})
            
        } catch (error) {
            console.log(error)
        }
    }
    static getpostForm = async(req, res) =>{
        try {
            res.render("FormPost")
        } catch (error) {
            console.log(error)
        }
    }
    
   
   
    
    static getpostDetails= async (req, res) =>{
        try {
            const result = await PostModel.find({post_title : (req.params.id)})
              
            res.render("DetailsPost.ejs", {posts: result})
              
        } catch (error) {
            console.log(error)
        }
        
    }
}

export default  postController;