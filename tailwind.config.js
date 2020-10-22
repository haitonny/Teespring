module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito"]
      },
      screens: {
        dmd: {
          max: "767px"
        },
        dlg: {
          max: "1023px"
        }
      },
      container: {
        center: true
      }
    }
  },
  variants: {},
  plugins: []
};
