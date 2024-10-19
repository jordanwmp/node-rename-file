import fs from 'fs'
const renameImages = (path, allNames) => {
    fs
        .readdirSync(path)
        .filter((file) => {
            return file.endsWith('.jpg')
        })
        .map((file, index) => {
            try {
                console.log('file', file)
                fs.rename(`${path}${file}`, `${path}${allNames[index]}.jpg`, () => {
                    console.log('name replaced')
                })
            } catch (error) {
                console.log('error on rename ', error)
            }
        })

}

export default renameImages