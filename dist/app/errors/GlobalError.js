"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalError = void 0;
const GlobalError = (err, req, res, next) => {
    res.status(403).json({
        success: false,
        message: "something wen wrong",
    });
};
exports.GlobalError = GlobalError;
