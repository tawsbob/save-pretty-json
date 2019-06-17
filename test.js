const prettyJson = require('./index.js')


prettyJson({
    filePath: './teste.json',
    data: {
        teste: 'data',
        array: ['something','value'],
        object: {
            teste: {
                teste: {
                    teste: {
                        teste: 1
                    }
                }
            }
        }
    }
}).then(()=>{
    console.log('done')
}).catch((err)=>{
    console.log(err)
})