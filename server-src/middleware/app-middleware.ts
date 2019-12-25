import { Request, Response, NextFunction, Express } from 'express';
import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

export function appMiddleware(app: Express) {
    return (req: Request, res: Response, next: NextFunction) => {
        app.use(express.static(path.join(__dirname, '../../dist')));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        next();
    }
}