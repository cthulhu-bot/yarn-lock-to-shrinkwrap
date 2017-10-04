export default class YarnLock {
  constructor(text) {
    this.rawText = text;
  }

  packages() {
    return this.rawText.split('\n\n').map(p => {
      return p.split('\n')[0]
    }).map(p => {
        let name, version
        name = p.split('@')[0]
        version = p.split('@')[1]
        if (version) {
            version = version.substring(0, version.length-1) || 'no version'
        } else {
            version = 'no version'
        }
        return { name: name, version: version }
    })
  }

  packageDependencies() {
  }

  packageUris() {
  }
}
