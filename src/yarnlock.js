export default class YarnLock {
  constructor(text) {
    this.rawText = text;
  }

  packages() {
    return this.rawText
      .split('\n\n')
      .map(p => {
        return p.split('\n');
      })
      .map(pkg => {
        let name, version;
        const packageHeader = pkg[0];
        const packageVersion = pkg[1];
        console.log(packageVersion)
        name = packageHeader.split('@')[0];
        version = packageHeader.split('@')[1];
        if (version) {
          version = version.substring(0, version.length - 1) || 'no version';
        } else {
          version = 'no version';
        }
        return {name: name, version: version};
      });
  }

  packageDependencies() {}

  packageUris() {}
}
