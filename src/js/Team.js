export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (this.members.has(obj)) {
      throw new Error('Already in the team');
    } else {
      this.members.add(obj);
    }
  }

  addAll(...args) {
    args.forEach((arg) => {
      this.members.add(arg);
    });
  }

  toArray() {
    return [...this.members];
  }
}
