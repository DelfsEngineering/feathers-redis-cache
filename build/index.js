"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hooks = exports.services = exports.client = void 0;
exports.client = require('./client').default;
exports.services = require('./services').default;
exports.hooks = require('./hooks').default;
exports.default = {
    client: exports.client,
    services: exports.services,
    hooks: exports.hooks,
};
//# sourceMappingURL=index.js.map