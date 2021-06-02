import React, { useState } from "react";
import styled from "styled-components";

export const WhiteScreen = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #b9b9b9;
  opacity: 0.5;
  z-index: 3;
`;

export default WhiteScreen;
