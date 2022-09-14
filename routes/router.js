import express from "express";
import PostModel from "../models/Post.model.js";
 
import multer from "multer";
import postController from "../controller/Post.controller.js";
import categoryController from "../controller/category.controller.js";
const router = express.Router();

//image upload
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname+" "+ Date.now()+"_"+file.originalname)
    },
});

var upload = multer({
    storage: storage,
}).single("image");

 
router.get('/', postController.Homepage)
router.get('/user/post', postController.getpostForm)
router.post('/user/post',upload, postController.createPost)
router.get('/user/category/', categoryController.getCategoryForm)
router.post('/user/category/', upload, categoryController.createCategory)
router.get('/all_category/', categoryController.getAllCategory)
router.get('/post_details/:id',postController.getpostDetails)

export default router;