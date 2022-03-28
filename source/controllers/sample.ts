import { Request, Response, NextFunction } from 'express';
import loggin from '../config/loggin';

const NAMESPACE = 'Sample Controller';

const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    loggin.info(NAMESPACE, `Sample health check route called.`);

    return res.status(200).json({
        message: 'pong'
    });
}

export default {
    sampleHealthCheck
}