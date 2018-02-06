import { Router } from 'express';
import chirpStore from '../chirpsstore';
import db from '../db';

let router = Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        db.GetChirp(id).then(results => {
            res.send(results);
        })
    } else {
        db.GetChirps().then(results => {
            res.send(results);
        })
    }
});

router.post('/', (req, res) => {
    db.PostChirp(req.body.text).then(results => {
        res.send(results);
    })
});

router.put('/:id/edit', (req, res) => {
    let id = req.params.id;
    db.EditChirp(id, req.body.text).then(results => {
        res.send(results);
    })
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    db.DeleteChirp(id).then(results => {
        res.send(results);
    })
});

export default router;