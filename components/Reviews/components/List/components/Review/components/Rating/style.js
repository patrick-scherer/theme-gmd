/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { css } from 'glamor';
import colors from 'Styles/colors';
import variables from 'Styles/variables';

const container = css({
  display: 'flex',
  alignItems: 'center',
}).toString();

const stars = css({
  display: 'inline-block',
  lineHeight: 'initial',
}).toString();

const text = css({
  marginLeft: variables.gap.small,
  color: colors.primary,
}).toString();

export default {
  container,
  stars,
  text,
};
