
var Q = require('kew');

var repo = require('./repo');

// declare a value object
function Email(v) {
    if (!/@/.test(v)) {
        throw new Error('invalid email format');
    }

    this._v = v;
}

Email.prototype.toString = function () {
    return this._v;
}

// declare ID object
function UserId() {}

// declare repo
function ApplicationStore() {}

ApplicationStore.prototype.getUserPrimaryEmail = repo.get(UserId, { primaryEmail: Email });
ApplicationStore.prototype.setUserPrimaryEmail = repo.set(UserId, { primaryEmail: Email });

ApplicationStore.prototype.findUserByPrimaryEmail = repo.findOne(UserId, { primaryEmail: Email });
ApplicationStore.prototype.findAllUsersByPrimaryEmail = repo.findAll(UserId, { primaryEmail: Email });

// for test injection/mocking, simple repo instantiation by itself creates a "no-op" object, with stubs throwing an error on invocation

// live code
var store = repo.implement(ApplicationStore);

store.findUserByPrimaryEmail(new Email('test@asd'));
