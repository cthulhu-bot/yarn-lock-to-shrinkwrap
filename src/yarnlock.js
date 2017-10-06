export default class YarnLock {
  constructor(text) {
    this.rawText = text;
  }

  packages() {
    return this.rawText.split('\n\n').map(p => {
      return p.split('\n')[0]
    }).map(p => {
        let name, version
        let parsedPackageInfo = p.split('@')
        if (parsedPackageInfo.length > 2) {
            parsedPackageInfo = parsedPackageInfo
                .map(entry => entry.split(', '))
                .reduce((acc, entry) => acc.concat([entry[0]]), [])
        }
        parsedPackageInfo[parsedPackageInfo.length - 1] = parsedPackageInfo[parsedPackageInfo.length - 1].substring(0, parsedPackageInfo[parsedPackageInfo.length - 1].length - 1)
                        console.log(parsedPackageInfo)
                        name = parsedPackageInfo[0]
                        version = parsedPackageInfo[1]
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
