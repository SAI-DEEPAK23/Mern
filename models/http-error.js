class HttpError extends Error{
    constructor(message,errorCode) {
        super(message);//Add a amessage property

        this.code = errorCode;
    }
}
module.exports = HttpError;