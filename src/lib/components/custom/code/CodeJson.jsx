import React from 'react'
import Base from 'lib/components/Base'

import './ap-code.scss'

let CHARS = [ '{', '}', '[', ']', ':', ',', '=' ]

class CodeJson extends Base {

    constructor(props) {
        super(props)
        this.baseClasses = [ 'ap-code-json' ]
        this.propsInfos = {
            required : {
            },
            optionnal : {
                children: {}
            }
        }
    }

    _buildChildren() {
        let values = this._readLine(this.props.children || '')
        let indent = 0
        let line = 0
        let result = []
        let current = ''
        for (let i = 0 ; i < values.length ; i++) {
            let v = values[i]
            if (v === '{' || v === '[') {
                if(current) {
                    result.push(<div key={line++}>{this._buildIndent(indent++) + current + v}</div>)
                    current = ''
                } else {
                    result.push(<div key={line++}>{this._buildIndent(indent++) + v}</div>)
                }
            } else if (v === '}' | v === ']') {
                if (current) {
                    result.push(<div key={line++}>{this._buildIndent(indent) + current}</div>)
                }
                indent--
                current = ''
                if (i < values.length - 1 && values[i + 1] === ',') {
                    result.push(<div key={line++}>{this._buildIndent(indent) + v + ','}</div>)
                    i++
                } else {
                    result.push(<div key={line++}>{this._buildIndent(indent) + v}</div>)
                }
            } else if (v === ':') {
                current += v + ' '
            } else if (v === ',') {
                result.push(<div key={line++}>{this._buildIndent(indent) + current + v}</div>)
                current = ''
            } else if (v === '=') {
                current += ' ' + v + ' '
            } else {
                current += v
            }
        }
        return result
    }
    _buildIndent(indent) {
        let result = ''
        for (let i = 0 ; i < indent ; i++) {
            result += '  '
        }
        return result
    }

    _readLine(line) {
        let res = [line]
        let con = true
        let it = 0
        do {
            let next = res
            for (let i = 0 ; i < CHARS.length ; i++) {
                let n = []
                next.forEach(function(s) {
                    let split = s.split(CHARS[i])
                    for (let j = 0 ; j < split.length ; j++) {
                        if (j > 0) {
                            n.push(CHARS[i])
                        }
                        if (split[j]) {
                            n.push(split[j].trim())
                        }
                    }
                })
                next = n
            }
            con = (next.length !== res.length)
            res = next
        } while (con)
        return res
    }

    render() {
        this.buildProps('CodeXml')
        return (
            <code className={this.className}>
                {this._buildChildren()}
            </code>
        )
    }
}
export default CodeJson
