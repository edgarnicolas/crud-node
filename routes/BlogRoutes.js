const express = require("express");

const {
    getAllBlogs,
    createBlog,
    getBlogById,
    updateBlog,
    deleteBlog,
} = require("../controllers/BlogController");

const router = express.Router();

router.route("/").get(getAllBlogs);
router.route("/create").post(createBlog);
router.route("/id/:id").get(getBlogById);
router.route("/update/:id").put(updateBlog);
router.route("/delete/:id").delete(deleteBlog);

module.exports = router;
