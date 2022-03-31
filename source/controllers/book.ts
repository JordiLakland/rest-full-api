import { Request, Response, NextFunction } from 'express';
import loggin from '../config/loggin';
import { Connect, Query } from '../config/mysql';

const NAMESPACE = 'Book Controller';

const createBook = (req: Request, res: Response, next: NextFunction) => {
    loggin.info(NAMESPACE, `Create Book`);

    const { author, book } = req.body;

    const query = `INSERT INTO books (author, book) VALUES ("${author}", "${book}")`;

    Connect()
    .then(connection => {
        Query(connection, query)
            .then(result => {
                return res.status(200).json({
                    result
                })
            })
            .catch(error => {
                loggin.error(NAMESPACE, error.message, error);

                return res.status(500).json({
                    message: error.message,
                    error: error
                })
            })
            .finally(() => {
                connection.end();
            })
    })
    .catch(error => {
        loggin.error(NAMESPACE, error.message, error);

        return res.status(500).json({
            message: error.message,
            error: error
        });
    });

}

const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
    loggin.info(NAMESPACE, `Getting Books`);

    const query = 'SELECT * FROM books';
    Connect()
        .then(connection => {
            Query(connection, query)
                .then(result => {
                    return res.status(200).json({
                        result
                    })
                })
                .catch(error => {
                    loggin.error(NAMESPACE, error.message, error);

                    return res.status(500).json({
                        message: error.message,
                        error: error
                    })
                })
                .finally(() => {
                    connection.end();
                })
        })
        .catch(error => {
            loggin.error(NAMESPACE, error.message, error);

            return res.status(500).json({
                message: error.message,
                error: error
            });
        });
}

export default {
    getAllBooks,
    createBook
}