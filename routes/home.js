const express = require('express');
const router = express.Router();
const Club = require('../models/Club');



// ROUTE FOR READ
router.get('/', (req, res) => {
    const {page=1,limit=10}=req.query
    Club.find((err, docs) => {
        if (err) throw err;
        res.render('home', {
            teams: docs
        })
    }).limit(limit * 1).skip((page - 1)* limit)
});


// ROUTE FOR CREATE
router.post('/add', (req, res, next) => {
    const {
        cid,
        pid,
        cname,
        pname,
    } = req.body;
    const club = new Club({
        cid,
        pid,
        cname,
        pname,
    });
    club.save(err => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });


});




// ROUTE TO SHOW UPDATE ELEMENT
router.get('/edit/:id', (req, res, next) => {
    console.log(req.params.id);
    Club.findOneAndUpdate({_id: req.params.id},req.body, { new: true }, (err, docs)=>{
        res.render('edit', {team:docs});
    })
});





// ROUTE TO UPDATE ELEMENT
router.post('/edit/:id', (req, res, next) => {
    Club.findByIdAndUpdate({_id: req.params.id},req.body, (err)=>{
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.redirect('/');
        }
    })
});



router.get('/:id',(req, res)=>{
    Club.findByIdAndDelete({_id:req.params.id}, err=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/');
        }
    });
})








module.exports = router;