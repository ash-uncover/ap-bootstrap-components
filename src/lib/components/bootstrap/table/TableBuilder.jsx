import React from 'react'
import Base from 'lib/components/Base'

import { Table, THead, TH, TBody, TFoot, TR, TD } from 'lib/exports'

class TableBuilder extends Base {

    constructor(props) {
        super(props)
        // Base classes
        this.baseClasses = []
        // Sub component properties
        this.tableProps = {}
        // Component properties
        this.propsInfos = {
            required : {
            },
            optionnal : {
                head: {},
                body: {},
                foot: {},
                bordered: { defaultValue: false, store: this.tableProps },
                striped: { defaultValue: false, store: this.tableProps },
                hover: { defaultValue: false, store: this.tableProps },
                condensed: { defaultValue: false, store: this.tableProps },
                responsive: { defaultValue: false, store: this.tableProps }
            }
        }
    }

    _buildHeaderRow(row, index) {
        return (
            <TR key={index} bsStyle={row.bsStyle}>
                {row.cells.map(this._forceHead).map(this._buildCell)}
            </TR>
        )
    }    
    _buildRow(row, index) {
        return (
            <TR key={index} bsStyle={row.bsStyle}>
                {row.cells.map(this._buildCell)}
            </TR>
        )
    }

    _forceHead(cell) {
        return Object.assign({}, cell, { head: true})
    }
    
    _buildCell(cell, index) {
        if (cell.head) {
            return (<TH key={index} bsStyle={cell.bsStyle}>{cell.content}</TH>)
        }
        return (<TD key={index} bsStyle={cell.bsStyle}>{cell.content}</TD>)
    }
    
    render() { 
        this.buildProps('TableBuilder')
        return (
            <Table className={this.className || ''} {...this.tableProps}>
            { this.props.head ? 
                <THead>
                    {this.props.head.map(this._buildHeaderRow.bind(this))}
                </THead>
            : '' }
            { this.props.body ? 
                <TBody>
                    {this.props.body.map(this._buildRow.bind(this))}
                </TBody>
            : '' }
            { this.props.foot ? 
                <TFoot>
                    {this.props.foot.map(this._buildRow.bind(this))}
                </TFoot>
            : '' }
            </Table>
        )
    }
}
export default TableBuilder
