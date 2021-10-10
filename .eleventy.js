module.exports = function (config) {

  config.addPassthroughCopy('./src/img');  
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: "src"
    }
  };
};
