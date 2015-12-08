// Copyright (c) 2015 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

'use strict';

function Query(opts) {
    opts = opts || {};
    var self = this;

    this.state = {
        type: 'query',
        datasource: null,
        refresh_on_load: true,
        options: [],
        includeAll: true,
        allFormat: 'glob',
        query: null,
        current: null,
        refresh: true
    };

    this.state.name = opts.name || 'template';
    this.state.query = opts.query || "";
    this.state.multi = opts.multiSelect || false;
    this.state.refresh_on_load = opts.refreshOnLoad || false;

    if (opts.options) {
        opts.options.forEach(function addOp(option) {
            self.addOption(option, true);
        });
    }
}

Query.prototype.addOption = function addOption(option, defaultOption) {
    this.state.options.push({
        text: option,
        value: option
    });

    // update the query
    var query = [];
    this.state.options.forEach(function forEach(op) {
        query.push(op.text);
    });

    this.state.query = query.join(',');

    if (defaultOption) {
        this.state.current = {
            text: option,
            value: option
        };
    }
};

Query.prototype.generate = function generate() {
    return this.state;
};

module.exports = Query;
