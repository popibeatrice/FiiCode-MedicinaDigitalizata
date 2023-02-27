(()=>{"use strict";var n={252:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&family=Roboto&display=swap);"]),a.push([n.id,'/*\n! tailwindcss v3.0.1 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse;  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;  /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;  /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n.-translate-x-1\\/2, .-translate-y-1\\/2, .transform, .hover\\:scale-110, .hover\\:scale-150 {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.border-2 {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n\n.shadow-2xl {\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n}\n\n.backdrop-blur-\\[3px\\] {\n  --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\r\n.pointer-events-none {\n  pointer-events: none;\n}\r\n.fixed {\n  position: fixed;\n}\r\n.absolute {\n  position: absolute;\n}\r\n.relative {\n  position: relative;\n}\r\n.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\r\n.top-1\\/2 {\n  top: 50%;\n}\r\n.left-1\\/2 {\n  left: 50%;\n}\r\n.top-\\[-5px\\] {\n  top: -5px;\n}\r\n.left-\\[-5px\\] {\n  left: -5px;\n}\r\n.right-\\[-5px\\] {\n  right: -5px;\n}\r\n.top-\\[25\\%\\] {\n  top: 25%;\n}\r\n.left-\\[10\\%\\] {\n  left: 10%;\n}\r\n.z-20 {\n  z-index: 20;\n}\r\n.z-10 {\n  z-index: 10;\n}\r\n.z-30 {\n  z-index: 30;\n}\r\n.order-3 {\n  order: 3;\n}\r\n.order-1 {\n  order: 1;\n}\r\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\r\n.my-5 {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\r\n.mr-8 {\n  margin-right: 2rem;\n}\r\n.mt-1 {\n  margin-top: 0.25rem;\n}\r\n.mr-3 {\n  margin-right: 0.75rem;\n}\r\n.mt-2 {\n  margin-top: 0.5rem;\n}\r\n.mt-6 {\n  margin-top: 1.5rem;\n}\r\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\r\n.mt-4 {\n  margin-top: 1rem;\n}\r\n.mt-3 {\n  margin-top: 0.75rem;\n}\r\n.flex {\n  display: flex;\n}\r\n.hidden {\n  display: none;\n}\r\n.h-20 {\n  height: 5rem;\n}\r\n.h-\\[250px\\] {\n  height: 250px;\n}\r\n.h-8 {\n  height: 2rem;\n}\r\n.h-4 {\n  height: 1rem;\n}\r\n.min-h-screen {\n  min-height: 100vh;\n}\r\n.w-20 {\n  width: 5rem;\n}\r\n.w-\\[80\\%\\] {\n  width: 80%;\n}\r\n.w-\\[75px\\] {\n  width: 75px;\n}\r\n.w-5\\/6 {\n  width: 83.333333%;\n}\r\n.w-8 {\n  width: 2rem;\n}\r\n.w-4 {\n  width: 1rem;\n}\r\n.w-\\[60vw\\] {\n  width: 60vw;\n}\r\n.w-\\[80px\\] {\n  width: 80px;\n}\r\n.w-\\[12rem\\] {\n  width: 12rem;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.max-w-sm {\n  max-width: 24rem;\n}\r\n.max-w-xs {\n  max-width: 20rem;\n}\r\n.max-w-\\[15rem\\] {\n  max-width: 15rem;\n}\r\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: var(--tw-transform);\n}\r\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: var(--tw-transform);\n}\r\n.transform {\n  transform: var(--tw-transform);\n}\r\n.cursor-default {\n  cursor: default;\n}\r\n.cursor-pointer {\n  cursor: pointer;\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.flex-wrap {\n  flex-wrap: wrap;\n}\r\n.items-start {\n  align-items: flex-start;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.justify-start {\n  justify-content: flex-start;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.justify-between {\n  justify-content: space-between;\n}\r\n.gap-2 {\n  gap: 0.5rem;\n}\r\n.gap-3 {\n  gap: 0.75rem;\n}\r\n.gap-8 {\n  gap: 2rem;\n}\r\n.gap-6 {\n  gap: 1.5rem;\n}\r\n.gap-1 {\n  gap: 0.25rem;\n}\r\n.self-start {\n  align-self: flex-start;\n}\r\n.self-end {\n  align-self: flex-end;\n}\r\n.rounded-3xl {\n  border-radius: 1.5rem;\n}\r\n.rounded-xl {\n  border-radius: 0.75rem;\n}\r\n.rounded-lg {\n  border-radius: 0.5rem;\n}\r\n.rounded {\n  border-radius: 0.25rem;\n}\r\n.border-2 {\n  border-width: 2px;\n}\r\n.border-solid {\n  border-style: solid;\n}\r\n.bg-slate-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(203 213 225 / var(--tw-bg-opacity));\n}\r\n.bg-logo_blue {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 163 208 / var(--tw-bg-opacity));\n}\r\n.bg-logo_d_blue {\n  --tw-bg-opacity: 1;\n  background-color: rgb(41 50 65 / var(--tw-bg-opacity));\n}\r\n.bg-slate-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(15 23 42 / var(--tw-bg-opacity));\n}\r\n.bg-somon {\n  --tw-bg-opacity: 1;\n  background-color: rgb(238 108 77 / var(--tw-bg-opacity));\n}\r\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\r\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.bg-opacity-30 {\n  --tw-bg-opacity: 0.3;\n}\r\n.bg-cover {\n  background-size: cover;\n}\r\n.bg-center {\n  background-position: center;\n}\r\n.p-4 {\n  padding: 1rem;\n}\r\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\r\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\r\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\r\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\r\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\r\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\r\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\r\n.pl-10 {\n  padding-left: 2.5rem;\n}\r\n.pl-3 {\n  padding-left: 0.75rem;\n}\r\n.text-center {\n  text-align: center;\n}\r\n.font-roboto {\n  font-family: Roboto, sans-serif;\n}\r\n.font-poppins {\n  font-family: Poppins, sans-serif;\n}\r\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\r\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\r\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\r\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\r\n.font-bold {\n  font-weight: 700;\n}\r\n.font-semibold {\n  font-weight: 600;\n}\r\n.uppercase {\n  text-transform: uppercase;\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.text-logo_blue {\n  --tw-text-opacity: 1;\n  color: rgb(0 163 208 / var(--tw-text-opacity));\n}\r\n.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\r\n.text-opacity-70 {\n  --tw-text-opacity: 0.7;\n}\r\n.opacity-0 {\n  opacity: 0;\n}\r\n.opacity-95 {\n  opacity: 0.95;\n}\r\n.opacity-\\[65\\%\\] {\n  opacity: 65%;\n}\r\n.bg-blend-multiply {\n  background-blend-mode: multiply;\n}\r\n.shadow-2xl {\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\r\n.shadow-black {\n  --tw-shadow-color: #000;\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.backdrop-blur-\\[3px\\] {\n  --tw-backdrop-blur: blur(3px);\n  -webkit-backdrop-filter: var(--tw-backdrop-filter);\n          backdrop-filter: var(--tw-backdrop-filter);\n}\r\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.transition-colors {\n  transition-property: background-color, border-color, color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.duration-1000 {\n  transition-duration: 1000ms;\n}\r\n.duration-300 {\n  transition-duration: 300ms;\n}\r\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\r\n.hover\\:scale-110:hover {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: var(--tw-transform);\n}\r\n.hover\\:scale-150:hover {\n  --tw-scale-x: 1.5;\n  --tw-scale-y: 1.5;\n  transform: var(--tw-transform);\n}\r\n.hover\\:bg-logo_d_blue:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(41 50 65 / var(--tw-bg-opacity));\n}\r\n.hover\\:bg-amber-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(146 64 14 / var(--tw-bg-opacity));\n}\r\n.hover\\:text-somon:hover {\n  --tw-text-opacity: 1;\n  color: rgb(238 108 77 / var(--tw-text-opacity));\n}\r\n@media (min-width: 365px) {\n\n  .xxs\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\r\n@media (min-width: 500px) {\n\n  .xs\\:w-\\[8rem\\] {\n    width: 8rem;\n  }\n\n  .xs\\:w-\\[10rem\\] {\n    width: 10rem;\n  }\n\n  .xs\\:flex-row {\n    flex-direction: row;\n  }\n\n  .xs\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .xs\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\r\n@media (min-width: 640px) {\n\n  .sm\\:top-\\[-8px\\] {\n    top: -8px;\n  }\n\n  .sm\\:left-\\[-8px\\] {\n    left: -8px;\n  }\n\n  .sm\\:right-\\[-8px\\] {\n    right: -8px;\n  }\n\n  .sm\\:block {\n    display: block;\n  }\n\n  .sm\\:h-28 {\n    height: 7rem;\n  }\n\n  .sm\\:h-10 {\n    height: 2.5rem;\n  }\n\n  .sm\\:h-6 {\n    height: 1.5rem;\n  }\n\n  .sm\\:w-28 {\n    width: 7rem;\n  }\n\n  .sm\\:w-10 {\n    width: 2.5rem;\n  }\n\n  .sm\\:w-6 {\n    width: 1.5rem;\n  }\n\n  .sm\\:w-\\[10rem\\] {\n    width: 10rem;\n  }\n\n  .sm\\:max-w-md {\n    max-width: 28rem;\n  }\n\n  .sm\\:max-w-sm {\n    max-width: 24rem;\n  }\n\n  .sm\\:max-w-xs {\n    max-width: 20rem;\n  }\n\n  .sm\\:gap-16 {\n    gap: 4rem;\n  }\n\n  .sm\\:gap-10 {\n    gap: 2.5rem;\n  }\n\n  .sm\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n\n  .sm\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .sm\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n}\r\n@media (min-width: 768px) {\n\n  .md\\:top-\\[30\\%\\] {\n    top: 30%;\n  }\n\n  .md\\:mr-14 {\n    margin-right: 3.5rem;\n  }\n\n  .md\\:gap-6 {\n    gap: 1.5rem;\n  }\n\n  .md\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .md\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .md\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n\n  .md\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n}\r\n@media (min-width: 1024px) {\n\n  .lg\\:h-36 {\n    height: 9rem;\n  }\n\n  .lg\\:w-36 {\n    width: 9rem;\n  }\n\n  .lg\\:w-\\[14rem\\] {\n    width: 14rem;\n  }\n\n  .lg\\:max-w-lg {\n    max-width: 32rem;\n  }\n\n  .lg\\:gap-20 {\n    gap: 5rem;\n  }\n\n  .lg\\:gap-5 {\n    gap: 1.25rem;\n  }\n\n  .lg\\:px-5 {\n    padding-left: 1.25rem;\n    padding-right: 1.25rem;\n  }\n\n  .lg\\:py-3 {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n  }\n\n  .lg\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .lg\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n}\r\n@media (min-width: 1280px) {\n\n  .xl\\:h-24 {\n    height: 6rem;\n  }\n\n  .xl\\:w-24 {\n    width: 6rem;\n  }\n\n  .xl\\:w-\\[85px\\] {\n    width: 85px;\n  }\n\n  .xl\\:max-w-xl {\n    max-width: 36rem;\n  }\n\n  .xl\\:max-w-lg {\n    max-width: 32rem;\n  }\n\n  .xl\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .xl\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n}\r\n@media (min-width: 1536px) {\n\n  .\\32xl\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n}\r\n',""]);const s=a},141:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"body {\r\n  background: linear-gradient(-45deg, #00a3d0, #293241);\r\n  background-size: 400% 400%;\r\n  animation: gradient 15s ease infinite;\r\n  min-height: 100vh;\r\n}\r\n\r\n@keyframes gradient {\r\n  0% {\r\n    background-position: 0% 50%;\r\n  }\r\n  50% {\r\n    background-position: 100% 50%;\r\n  }\r\n  100% {\r\n    background-position: 0% 50%;\r\n  }\r\n}\r\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var l=0;l<n.length;l++){var m=[].concat(n[l]);r&&a[m[0]]||(void 0!==i&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=i),t&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=t):m[2]=t),o&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=o):m[4]="".concat(o)),e.push(m))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],l=r.base?d[0]+r.base:d[0],m=i[l]||0,c="".concat(l," ").concat(m);i[l]=m+1;var p=t(c),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var g=o(h,r);r.byIndex=s,e.splice(s,0,{identifier:c,updater:g,references:1})}a.push(c)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var d=r(n,o),l=0;l<i.length;l++){var m=t(i[l]);0===e[m].references&&(e[m].updater(),e.splice(m,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),d=t.n(s),l=t(216),m=t.n(l),c=t(589),p=t.n(c),h=t(252),g={};g.styleTagTransform=p(),g.setAttributes=d(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=m(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var b=t(141),u={};u.styleTagTransform=p(),u.setAttributes=d(),u.insert=a().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=m(),e()(b.Z,u),b.Z&&b.Z.locals&&b.Z.locals})()})();