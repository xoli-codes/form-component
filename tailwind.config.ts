const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [ 
    "./pages/**/*.{js,ts,jsx,tsx}", //project files
    "./node_modules/@material-tailwind/react/**/*.js", // Material Tailwind
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
