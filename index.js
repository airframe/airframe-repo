
var Q = require('kew');

var repo = require('./repo');
var KnexBackend = require('./KnexBackend');

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

// database setup
var defaultBackend = new KnexBackend('mysql', {});

var env = new repo.Environment();
env.addIdentity(UserId, defaultBackend); // this allows auto-creating User identities in DB

var store = env.implement(ApplicationStore, defaultBackend); // @todo consider per-method granularity

// business logic
store.findUserByPrimaryEmail(new Email('test@asd'));
