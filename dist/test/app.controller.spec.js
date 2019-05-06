"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const auth_provider_1 = require("src/modules/auth/auth.provider");
const auth_service_1 = require("src/modules/auth/auth.service");
describe('AppController', () => {
    let appController;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        const app = yield testing_1.Test.createTestingModule({
            controllers: [auth_provider_1.AuthController],
            providers: [auth_service_1.AuthService],
        }).compile();
        appController = app.get(auth_provider_1.AuthController);
    }));
    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(appController.getHello()).toBe('Hello World!');
        });
    });
});
//# sourceMappingURL=app.controller.spec.js.map