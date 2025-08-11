"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const notFound = (req, res, next) => {
    res.status(500).json({
        success: false,
        message: "API not found",
    });
};
exports.notFound = notFound;
