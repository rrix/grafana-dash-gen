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

var test = require('cached-tape');
var config = require('../grafana/config');

test('config extends default configuration', function t(assert) {
    var foo = 'foo';
    var bar = 1;
    var user = 'notguest';
    var group = 'guest';
    var url = 'http://myfakeurl.com';
    var cookie = 'auth=value';

    var cfg = {
        foo: foo,
        bar: bar,
        user: user,
        url: url,
        cookie: cookie
    };

    var expected = {
        foo: foo,
        bar: bar,
        user: user,
        group: group,
        url: url,
        cookie: cookie
    };

    config.configure(cfg);
    var result = config.getConfig();

    assert.deepEqual(result, expected);
    assert.end();
});
