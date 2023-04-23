import {Injectable, NestMiddleware, UnauthorizedException} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthentifMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const token = req.headers['auth-user'] as string;
    if(!token)
    {
      throw new UnauthorizedException() ;
    }
    try {
      const decode = verify(token,'qwertyuiopasdfghjklzxcvbnm123456');
      req.userId=decode.userId ;
      console.log(decode)
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Invalid authentication token.' });
    }
  }
}
