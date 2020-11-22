import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import SvgAnimatedLinearGradient from "react-native-svg-animated-linear-gradient";
import { Rect } from "react-native-svg";

const { height } = Dimensions.get("window");

const Loader = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: white;
`;

const LoaderBody = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-top: 10px;
`;

function FeedLoad() {
  return (
    <Loader>
      <LoaderBody>
        <SvgAnimatedLinearGradient width="100%" height={height * 0.37}>
          <Rect x="0" y="0" rx="4" ry="4" width="100%" height={height * 0.27} />
          <Rect
            x="0"
            y={height * 0.28}
            rx="4"
            ry="4"
            width="90%"
            height={height * 0.05}
          />
        </SvgAnimatedLinearGradient>
        <SvgAnimatedLinearGradient width="100%" height={height * 0.375}>
          <Rect x="0" y="0" rx="4" ry="4" width="100%" height={height * 0.27} />
          <Rect
            x="0"
            y={height * 0.28}
            rx="4"
            ry="4"
            width="90%"
            height={height * 0.05}
          />
        </SvgAnimatedLinearGradient>
        <SvgAnimatedLinearGradient width="100%" height={height * 0.375}>
          <Rect x="0" y="0" rx="4" ry="4" width="100%" height={height * 0.27} />
          <Rect
            x="0"
            y={height * 0.28}
            rx="4"
            ry="4"
            width="90%"
            height={height * 0.05}
          />
        </SvgAnimatedLinearGradient>
      </LoaderBody>
    </Loader>
  );
}

export default FeedLoad;
