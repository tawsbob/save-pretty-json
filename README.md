# save-pretty-json

Simple module to save your json data pretty

## Installation

```bash
npm install save-pretty-json ---save
```

## Usage

```javascript
    const prettyJson = require('save-pretty-json')
    
    prettyJson({
        filePath: './teste.json',
        data: {
            teste: 'data',
        },
        encoding: 'ISO-8859-1' // default is utf-8
    }).then(()=>{
        console.log('done')
    }).catch((err)=>{
        console.log(err)
    })
```
