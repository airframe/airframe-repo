

function createStub() {
    return function () {
        throw new Error('not implemented');
    };
}

function Environment() {
}

Environment.prototype.addIdentity = function (idConstructor, backend) {
};

Environment.prototype.implement = function (repoConstructor, backend) {
    return new repoConstructor();
};

module.exports.Environment = Environment;

module.exports.get = function (idConstructor, fieldMap) {
    return createStub();
};

module.exports.set = function (idConstructor, fieldMap) {
    return createStub();
};

module.exports.findOne = function (idConstructor, fieldMap) {
    return createStub();
};

module.exports.findAll = function (idConstructor, fieldMap) {
    return createStub();
};
