/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule StaticRenderer
 * @flow
 */
'use strict';

var React = require('React');

var ReboundRenderer = React.createClass({
  propTypes: {
    boundTo: React.PropTypes.number.isRequired,
    render: React.PropTypes.func.isRequired,
  },

  shouldComponentUpdate: function(nextProps): boolean {
    return nextProps.boundTo !== this.props.boundTo;
  },

  render: function(): ReactElement<any> {
    console.log('ReboundRenderer render() boundTo=' + this.props.boundTo);
    return this.props.render(this.props.boundTo);
  },
});

module.exports = ReboundRenderer;
