"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersTokensRepository = void 0;
var typeorm_1 = require("typeorm");
var UserTokens_1 = require("../entities/UserTokens");
var UsersTokensRepository = /** @class */ (function () {
    function UsersTokensRepository() {
        this.repository = (0, typeorm_1.getRepository)(UserTokens_1.UserTokens);
    }
    UsersTokensRepository.prototype.create = function (_a) {
        var user_id = _a.user_id, refresh_token = _a.refresh_token, expires_date = _a.expires_date;
        return __awaiter(this, void 0, void 0, function () {
            var userToken;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userToken = this.repository.create({
                            expires_date: expires_date,
                            refresh_token: refresh_token,
                            user_id: user_id,
                        });
                        return [4 /*yield*/, this.repository.save(userToken)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, userToken];
                }
            });
        });
    };
    UsersTokensRepository.prototype.findByUserIdAndRefreshToken = function (user_id, refresh_token) {
        return __awaiter(this, void 0, void 0, function () {
            var usersTokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            user_id: user_id,
                            refresh_token: refresh_token,
                        })];
                    case 1:
                        usersTokens = _a.sent();
                        return [2 /*return*/, usersTokens];
                }
            });
        });
    };
    UsersTokensRepository.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.delete(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersTokensRepository.prototype.findByRefreshToken = function (refresh_token) {
        return __awaiter(this, void 0, void 0, function () {
            var userToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({ refresh_token: refresh_token })];
                    case 1:
                        userToken = _a.sent();
                        return [2 /*return*/, userToken];
                }
            });
        });
    };
    return UsersTokensRepository;
}());
exports.UsersTokensRepository = UsersTokensRepository;
