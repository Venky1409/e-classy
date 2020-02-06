var express = require('express');
import { Request, Response } from 'express';
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    img: { data: Buffer, contentType: String }
});
var A = mongoose.model('A', schema);


class ImageController {
    public post(req: Request, res: Response) {
        let category = req.body;

        var a = new A;
        a.img.data = fs.readFileSync();
        a.img.contentType = 'image/png';

        a.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
}

export default new ImageController();