import { Dimensions, PixelRatio } from "react-native";

const { width } = Dimensions.get("screen");

const guidlineBaseWith = 375;

const scaleSize = (size) => (width / guidlineBaseWith) * size;
const styledScaleSize = (size) => `${scaleSize(size)}px`;

const fontRatio = PixelRatio.getFontScale();
const scaleFontSize = (size) => size * fontRatio;
const styledScaleFontSize = (size) => `${scaleFontSize(size)}px`;

const dimensions = (top, right = top, bottom = top, left = right, property) => {
  const styles = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
};

function margin(top, right, bottom, left) {
  return dimensions(
    scaleSize(top),
    scaleSize(right),
    scaleSize(bottom),
    scaleSize(left),
    "margin"
  );
}

function padding(top, right, bottom, left) {
  return dimensions(
    scaleSize(top),
    scaleSize(right),
    scaleSize(bottom),
    scaleSize(left),
    "padding"
  );
}

function styledMargin(top, right, bottom, left) {
  return dimensions(
    styledScaleSize(top),
    styledScaleSize(right),
    styledScaleSize(bottom),
    styledScaleSize(left),
    "margin"
  );
}

function styledPadding(top, right, bottom, left) {
  return dimensions(
    styledScaleSize(top),
    styledScaleSize(right),
    styledScaleSize(bottom),
    styledScaleSize(left),
    "padding"
  );
}
export {
  scaleSize,
  styledScaleSize,
  scaleFontSize,
  styledScaleFontSize,
  margin,
  padding,
  styledMargin,
  styledPadding,
};
