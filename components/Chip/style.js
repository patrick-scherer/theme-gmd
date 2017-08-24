import cxs from 'cxs';
import colors from 'Styles/colors';
import variables from 'Styles/variables';

/**
 * Gets a basic style object for the chip layout.
 * @param {boolean} hasRemoveButton Whether this chip has a remove button.
 * @returns {Object} The style object.
 */
const chipBase = (hasRemoveButton = true) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: 26,
  outline: 0,
  height: 26,
  paddingRight: variables.gap.small,
  paddingLeft: variables.gap.small * (hasRemoveButton ? 0.5 : 1),
  marginRight: 5,
  marginTop: 5,
  marginBottom: 5,
  minWidth: 0,
});

/**
 * Gets a style class for the chip layout.
 * @param {boolean} hasRemoveButton Whether this chip has a remove button.
 * @param {boolean} inverted Whether the colors of the chip are inverted.
 * @returns {string} The style class name.
 */
const chip = (hasRemoveButton = true, inverted = false) => cxs({
  ...chipBase(hasRemoveButton),
  backgroundColor: (inverted ? colors.accent : colors.light),
  color: (inverted ? colors.light : colors.accent),
});

const removeButton = cxs({
  flexShrink: 0,
  margin: 0,
  padding: 0,
});

const name = cxs({
  paddingLeft: (variables.gap.small * 0.5),
  paddingRight: (variables.gap.small * 0.5),
  paddingTop: 3,
  paddingBottom: 3,
  fontSize: 12,
  fontWeight: 500,
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  display: 'block',
  lineHeight: '1',
  color: 'inherit',
});

export default {
  chip,
  removeButton,
  name,
};
