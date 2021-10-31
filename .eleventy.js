module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy({"src/_includes/styles/global.css": "global.css"});

  eleventyConfig.addPassthroughCopy("**/*.svg");

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addFilter("defaultDateFormat", (dateToConvert) => {
    return new Date(dateToConvert).toLocaleString('de-DE', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    });
  });
    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  }