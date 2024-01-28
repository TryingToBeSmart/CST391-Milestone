import { Request, RequestHandler, Response, NextFunction } from "express";

// render the index Home page
function getIndex(req: Request, res: Response, next: NextFunction) {
    res.render('index', { title: 'Home' });
}

module.exports = {
    getIndex
}
