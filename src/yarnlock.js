export default class YarnLock {
  constructor(text) {
    this.rawText = text;
  }

  packages() {
    const parsedPackages = this.rawText.split('\n\n');
    return parsedPackages.map(p => {
      return p.split('\n')[0]
    })
  }
}
