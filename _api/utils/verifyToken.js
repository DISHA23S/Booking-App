import jwt from "jsonwebtoken"
import { createError } from "../utils/error.js"

export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token;
    if(!token){
        return next(createError(401,"You are not Authenticated"))

    }
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err) return next(createError(403,"Token is not vaild!"));
        req.user=user;
        next(err)
    });
};

export const verifyUser=(req,res,next)=>{
    verifyUser(req,res, ()=>{
        if(req.user.id===req.params.id||req.user.isAdmin){
            next()
        }else{
            if(err) return next(createError(403,"You are not authicated!"));
        }
    })
}
export const verifyAdmin = (req, res, next) => {
        verifyToken(req, res, next, () => {
          if (req.user.isAdmin) {
            next();
          } else {
            return next(createError(403, "You are not authorized!"));
          }
        });
}