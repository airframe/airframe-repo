

function createStub() {
    return function () {
        throw new Error('not implemented');
    };
}

function RepoFactory() {
}

RepoFactory.prototype.get = function (idConstructor, fieldMap) {
    return createStub();
};

RepoFactory.prototype.set = function (idConstructor, fieldMap) {
    return createStub();
};

RepoFactory.prototype.findOne = function (idConstructor, fieldMap) {
    return createStub();
};

RepoFactory.prototype.findAll = function (idConstructor, fieldMap) {
    return createStub();
};

RepoFactory.prototype.implement = function (repoConstructor) {
    return new repoConstructor();
};

module.exports = new RepoFactory();
