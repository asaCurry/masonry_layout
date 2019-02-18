A masonry layout for Klaviyo | By Asa Curry

Project Notes:

1) Assumptions
  -I wanted to achieve as close to the prescribed layout as possible, but to do so without sacrificing smooth animations or imposing restrictions on the count/layout of the grid-items.

  -my scripts.js file allocations grid-item sizing and color randomly on load to mimic the unpredictability I generally assume when developing for a CMS.

  -As described below, I came to the conclusion while working through the exercise that it would not be practical to include desirable animations while also preserving the two column and rectangular celled layout shown in the mockup.

2) Development Environment
  -I began setting this project up in a few different environments (React, Pug + express, Babel + Webpack) before settling on a standard HTML, CSS, Js structure.

  -Although React would have been ideal for expandability and controlling the filters and expansion of the cards, my research indicated that the virtual DOM does not interact well with the dynamic animations for the layout.

  -I chose to not make use of Babel (and thereby ES6), as the setup seemed excessive for scripts that would not benefit from modern manipulator functions like Reduce() or Map(), and other ES6 standards, such as the ternary operator, would not improve the readability of the code in this case.

3) Library Choices
  -At first blush I had hoped it would be possible to complete the layout and interactions using the CSS Grid standard. Unfortunately CSS grid has very little support for animations, and does not interact well with nested absolute positioning and dynamic resizing.

  -I then intended to homebrew the grid calculations with a Flexbox based approach, but this approach had similar issues in needing to redraw the layout whenever an element is resized. Additionally, my ability to set up the calculations had significant performance issues and scaled poorly with the grid-item count.

  -I finally settled on using Masonry.js, which is the most common library for this type of interaction. In the end I felt it was better to use a performant solution that would handle the animations as gracefully as possible, rather than sacrificing the interactivity to have the layout be as precise as in the mockup.

4) Unsolved Issues/Improvements
  -the biggest compromise of this solution is that the layout does not lend itself to being fixed in a two column pattern as used in the mockup. I considered using a combination of two columns and fixed "cells" to create the consistency the mockup showed, but that would again limit the type/count of grid items in the layout, as well as the flexibility of the animations on resize or filter.

  -The result is the presence of whitespace when Masonry.js is not able to sort the cells perfectly with the three grid-item sizes. Although less than ideal, I don't believe this would drastically impact the usability of the layout as masonry layouts are inherently asymmetrical.

  -Lastly, there is a "stutter" in the animation after the grid layout re-sorts. As best I was able to determine, this comes from the masonry.js library incorporating the grid gutters and margin in a separate calculation and animation after the initial sort. So far, I was not able to find a solution for the effect.
