import auth from './auth';

export default class Component {
    constructor(target, content) {
        this.target = target;
        this.content = content;
        this._session = auth.getInstance();
        this._session.subscribe(this.render.bind(this));
    }

    render(content = this.content) {
        if (this._session.getUser()) {
            this.target.innerHTML = content;
            return;
        }
        this.target.innerHTML = '<h1>Not Authorized</h1>';
    }
}