export const Identity = x => ({
    map: f => Identity(f(x)),
    fold: f => f(x),
    inspect: () => `Identity(${x})`,
});

// Left/Right usage notes
// .fold(x => 'error', x => x)
//
// var found = someVal ? Right(found) : Left(null)
// const result = found.fold(e => 'no result', r => result)
//
// use chain when returning nested Right(Right(x)) etc
// .chain(c => tryCatch(() => JSON.parse(c)))
// or
// .chain(a => fromNullable(a.street))
// to return the inner value (like identity's fold)

export const Right = x => ({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    inspect: () => `Right(${x})`,
});

export const Left = x => ({
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f, g) => f(x),
    inspect: () => `Left(${x})`,
});

// Usage: fromNullable(someObject['someKey'])

export const fromNullable = x =>
      x != null ? Right(x) : Left(null)

// Usage: tryCatch(() => fs.readFileSync('config.json'))

export const tryCatch = f => {
    try {
        return Right(f())
    } catch(e) {
        return Left(e)
    }
}

