export default (() => {
    let _instance = null;

    class Auth {
        constructor() {
            this._listeners = [];
            this._user = null;
        }

        subscribe(cb) {
            this._listeners.push(cb);
        }

        _notify() {
            this._listeners.forEach(cb => cb());
        }

        login(user) {
            this._user = user;
            this._notify();
        }

        getUser() {
            return this._user;
        }

        clear() {
            this._user = null;
            this._notify();
        }
    }

    return {
        getInstance() {
            if (!_instance) {
                _instance = new Auth();
            }

            return _instance;
        }
    }
})();