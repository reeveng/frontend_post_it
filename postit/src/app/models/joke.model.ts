export class Joke {
  _id: any;
  _type: any;
  _setup: any;
  _punchline: any;

  get setup(): string {
    return this.setup;
  }

  get punchline(): string {
    return this._punchline;
  }

  get id(): string {
    return this._id;
  }

  get type(): string {
    return this._type;
  }

  set type(type) {
    this._type = type;
  }

  set setup(setup) {
    this._setup = setup;
  }

  set punchline(punchline) {
    this._punchline = punchline;
  }

  set id(id) {
    this._id = id;
  }
}
