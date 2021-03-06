'use strict';

var _templateObject = _taggedTemplateLiteral(['\n    <article data-magic="', '">\n      <h3>', '</h3>\n      List of ', ' paragraphs:\n      <ul onclick="', '">', '</ul>\n    </article>\n    '], ['\n    <article data-magic="', '">\n      <h3>', '</h3>\n      List of ', ' paragraphs:\n      <ul onclick="', '">', '</ul>\n    </article>\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['<li>', '</li>'], ['<li>', '</li>']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

window.onload = function () {

  var articleElement = document.querySelector('article');

  var update = function update(render, state) {
    return render(_templateObject, state.magic, state.title, state.paragraphs.length, function (e) {
      return alert(e.target.innerHTML);
    }, state.paragraphs.map(function (p) {
      return hyperHTML.wire(p)(_templateObject2, p.title);
    }));
  };

  update(hyperHTML.bind(articleElement), {
    title: 'True story',
    magic: true,
    paragraphs: [{ title: 'touching' }, { title: 'incredible' }, { title: 'doge' }]
  });
};
