const fs = require('fs')
function prettyJsonToFile({ filePath = 'nopath.json', data, encoding = 'utf8'  }){
    return new Promise((resolve, reject)=>{
        if(data){
            fs.writeFile(filePath, JSON.stringify(data, null, 4), encoding, (err) => {
                if (err){
                    reject(err)
                } else {
                    resolve()
                }
              })
        } else {
            reject('no json data to save')
        }
    })
}

module.exports = prettyJsonToFile