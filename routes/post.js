const router = require('express').Router()
const Blog = require('../models/Blog')


router
    .get('/post/:id', async (req, res) => {
        const { id } = req.params;
        const getBlog = await Blog.findOne({ _id: id })
        res.render('post', { blog: getBlog })
    })

    .get('/post/delete/:id', async (req, res) => {
        const { id } = req.params;
        await Blog.deleteOne({ _id: id })
            .then(() => {
                console.log(`blog with ${id} deleted successfully!`);
                res.redirect('/')
            }).catch(err => console.log(err))

    })
    .get('/post/edit/:id', async (req, res) => {
        const { id } = req.params;
        const getData = await Blog.findOne({ _id: id })
        res.render('edit', { blog: getData })
    })
    .post('/post/edit/:id', async (req, res) => {
        const { id } = req.params;
        const { title, content } = req.body;
        Blog.updateOne({ _id: id }, { title, content })
            .then(() => {
                console.log('updated successfully!');
                res.redirect('/')
            }).catch(err => console.log(err))

    })

module.exports = router;