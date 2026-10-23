export class ExternalApiError extends Error {
    constructor(message, statusCode, details = null) {
        super(message);

        this.name = "ExternalApiError";
        this.statusCode = statusCode;
        this.details = details;
    }
}