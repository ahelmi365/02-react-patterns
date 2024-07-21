// declare namespace JSX {
//   interface IntrinsicElements {
//     "icao-checker-wc": React.DetailedHTMLProps<
//       React.HTMLAttributes<HTMLElement> & {
//         "data-is-icao-wc"?: boolean;
//         "data-open-modal-button-id"?: string;
//         "data-saved-image-id"?: string;
//       },
//       HTMLElement
//     >;
//     "get-icao-checker-wc": React.DetailedHTMLProps<
//       React.HTMLAttributes<HTMLElement> & {
//         isICAOWC?: boolean;
//         openModalElmId?: string;
//         savedImageElmId?: string;
//         getImgSrc?: (src: string) => void;
//       },
//       HTMLElement
//     >;
//   }
// }
// v2

// declare namespace JSX {
//   interface IntrinsicElements {
//     "get-icao-checker-wc": React.DetailedHTMLProps; // You can replace `any` with a more specific type if needed
//   }
// }

// interface GetIcaoCheckerWcElement extends HTMLElement {
//   isICAOWC: boolean;
//   openModalElmId: string;
//   savedImageElmId: string;
//   getImgSrc: (src: string) => void;
// }

// declare global {
//   interface HTMLElementTagNameMap {
//     "get-icao-checker-wc": GetIcaoCheckerWcElement;
//   }
// }

// v3
// src/types/custom-elements.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "get-icao-checker-wc": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      isICAOWC?: boolean;
      openModalElmId?: string;
      savedImageElmId?: string;
      getImgSrc?: (src: string) => void;
    };
  }
}

// Extend the HTMLElementTagNameMap to include the custom element
interface HTMLElementTagNameMap {
  "get-icao-checker-wc": HTMLGetIcaoCheckerWcElement;
}

interface HTMLGetIcaoCheckerWcElement extends HTMLElement {
  isICAOWC: boolean;
  openModalElmId: string;
  savedImageElmId: string;
  getImgSrc: (src: string) => void;
}
