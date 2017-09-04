test('empty test', () => {
    expect(true).toBe(false);
});

const shrinkwrapStub = 
{
    "name": "package-name",
    "version": "1.2832.0",
    "dependencies": {
      "package1": {
        "version": "1.1.0",
        "from": "package1@>=1.0.0 <2.0.0",
        "resolved": "http://npm.f4tech.com/artifactory/api/npm/rally-npm/package1/-/package1-1.1.0.tgz"
      },
      "package2": {
        "version": "1.3.3",
        "from": "package2@1.3.3",
        "resolved": "http://npm.f4tech.com/artifactory/api/npm/rally-npm/package2/-/package2-1.3.3.tgz"
      },
      "package3": {
        "version": "5.1.1",
        "from": "package3@>=5.0.0 <6.0.0",
        "resolved": "http://npm.f4tech.com/artifactory/api/npm/rally-npm/package3/-/package3-5.1.1.tgz"
      },
      "package4": {
        "version": "2.0.2",
        "from": "package4@>=2.0.0 <3.0.0",
        "resolved": "http://npm.f4tech.com/artifactory/api/npm/rally-npm/package4/-/package4-2.0.2.tgz",
        "dependencies": {
          "package5": {
            "version": "4.0.13",
            "from": "package5@>=4.0.3 <5.0.0",
            "resolved": "http://npm.f4tech.com/artifactory/api/npm/rally-npm/package5/-/package5-4.0.13.tgz"
          }
        }
      }
    }
}

const lockfileStub = {
    "package-3@^3.0.0":
    version "3.1.9"
    resolved "https://registry.npmjs.org/package-3/-/package-3-3.1.9.tgz#a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0"
    dependencies:
      package-4 "^4.5.0"
}