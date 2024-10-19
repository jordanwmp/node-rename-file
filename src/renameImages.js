import fs from 'fs'
import chalk from 'chalk'

const renameImages = (path, allNames) => {
    fs
        .readdirSync(path)
        .filter((file) => {
            return file.endsWith('.jpg')
        })
        .map((file, index) => {
            try {
                fs.rename(`${path}${file}`, `${path}${allNames[index]}.jpg`, () => {})
            } catch (error) {
                console.log(chalk.white.bgYellow(`Error on rename image ${file}`))
            }
        })

}

export default renameImages