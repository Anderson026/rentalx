"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var multer_1 = __importDefault(require("multer"));
var path_1 = require("path");
var tmpFolder = (0, path_1.resolve)(__dirname, "..", "..", "tmp");
exports.default = {
    tmpFolder: tmpFolder,
    storage: multer_1.default.diskStorage({
        destination: tmpFolder,
        filename: function (request, file, callback) {
            // cria um hash hexadecimenal para o nome do arquivo
            var fileHash = crypto_1.default.randomBytes(16).toString("hex");
            // concatena o hash com o nome original
            var fileName = fileHash + "-" + file.originalname;
            return callback(null, fileName);
        },
    })
};
