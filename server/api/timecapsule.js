const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

function isValidId(req, res, next) {
    if(!isNaN(req.params.id)) {
       return next();
    } else {
        next(new Error('Invalid ID'));
    }
}

function validTimeCapsule(timeCapsule) {
    const hasUser = typeof timeCapsule.user == 'string' && timeCapsule.user.trim() != '';
    const hasNote = typeof timeCapsule.note == 'string' && timeCapsule.note.trim() != '';

    return hasUser && hasNote;
}

router.get('/', (req, res) => {
    queries.getAll().then(timecapsules => {
        res.json(timecapsules);
    })
});

router.get('/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(timeCapsule => {
        if(timeCapsule) {
            res.json(timeCapsule);
        } else {
            res.status(404);
            next();
        }
    });
});

router.post('/', (req, res, next) => {
    if(validTimeCapsule(req.body)) {
        if(req.body.date === undefined || req.body.date === null) {
            req.body.date = new Date();
        }
        queries.create(req.body).then(capsules => {
            res.json(capsules[0]);
        });
    } else {
        next(new Error('Invalid Time Capsule'));
    }
});

router.put('/:id', isValidId, (req, res, next) => {
    if(validTimeCapsule(req.body)) {
        queries.update(req.params.id, req.body).then(capsules => {
            res.json(capsules[0]);
        });
    } else {
        next(new Error('Invalid Time Capsule'));
    }
});

router.delete('/:id', isValidId, (req, res) => {
    // do something
    queries.delete(req.params.id).then(() => {
        res.json({
            deleted: true
        });
    });
});

module.exports = router;