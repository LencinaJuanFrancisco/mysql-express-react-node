import BlogModel from "../models/BlogModel.js";

export const getAllBlogs=async(req,res)=>{
    try {
       const blogs = await BlogModel.findAll()
       res.json(blogs)
    } catch (error) {
        res.json({message:error})
    }
}

export const getBlog = async (req,res)=>{
    try {
        const blog = await BlogModel.findByPk(req.params.id)
        res.json(blog)
    } catch (error) {
        res.json({message:error})
    }
}

export const createBlog = async (req,res)=>{
    try {
        await BlogModel.create(req.body)
        res.json({message:"Creado correctamente"})
    } catch (error) {
        res.json({message:error})
    }
}
export const updateBlog = async(req,res)=>{
    try {
        await BlogModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({message:"Editado Correctamente"})
    } catch (error) {
        res.json({message:error})
    }
}
export const deleteBlog = async(req,res)=>{
    try {
        await BlogModel.destroy({
            where:{id: req.params.id}
            })
        res.json({message:"El blog fue eliminado"})
    } catch (error) {
        res.json({message:error})
    }
}