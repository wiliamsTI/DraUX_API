import boom from "@hapi/boom";

function validatorHandler(schema,property){

  return(res,req,next)=>{
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });

    if(error){
      next(boom.badRequest(error))
    }
    next();
  }
}

module.exports = validatorHandler;
