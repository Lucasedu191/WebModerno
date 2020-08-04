const fs = require('fs')
const { promises } = require('dns')

module.exports = paths => {
    return new promises((resolver, reject)=> {
        try {
            const rows = paths
                .map(path => fs.readFileSync(path).toString('utf-8'))
                .reduce((fullText, fileText) => `${fullText}\n${fileText}`)
                .split('\n')
            resolver
        } catch (e) {
            reject(e)
        }
    })
}