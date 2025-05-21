


class apierror extends Error{
    constructor(
        statusCode,
        message="somthing went error",
        errors=[],
        stack=""
    )
{
    super(message)
    this.statusCode=statusCode
    this.data=null
    this.message=message
    this.sucess=false;
    this.errors=errors


    if(stack){
        this.stack=stack;
    }else{
        Error.captureStackTrace(this,this.constructor)
    }
}}


export {apierror}