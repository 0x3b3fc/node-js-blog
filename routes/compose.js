const router = require('express').Router()
const Blog = require('../models/Blog')

router
    .get('/compose', (req, res) => {
        res.render('compose')
    })
    .post('/compose', async (req, res) => {
        const { title, content } = req.body;
        //check for the missing fields!
        if (!title || !content) return res.send('please enter the required credentials!')
        const saveData = await new Blog({ title, content })
        //save the blog to database
        saveData.save()
            .then(() => console.log('Blog Added To Database'))
            .catch(err => console.log(err))
        res.redirect('/');
    })


module.exports = router;