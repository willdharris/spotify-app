import { css } from "styled-components/macro";

const fonts = css`
  @font-face {
    font-family: "Montserrat";
    src: url("../fonts/montserrat-v21-latin-regular.woff2") format("woff2"),
      url("../fonts/montserrat-v21-latin-regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("../fonts/montserrat-v21-latin-700.woff2") format("woff2"),
      url("../fonts/montserrat-v21-latin-700.woff") format("woff");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("../fonts/montserrat-v21-latin-900.woff2") format("woff2"),
      url("../fonts/montserrat-v21-latin-900.woff") format("woff");
    font-weight: 900;
    font-style: normal;
  }
`;

export default fonts;
