
// The tag names are verified against html-tag-names in the tests
// See https://github.com/ohanhi/hyperscript-helpers/issues/34 for the reason
// why the tags aren't simply required from html-tag-names
const TAG_NAMES = [
    'a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside',
    'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink',
    'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite',
    'code', 'col', 'colgroup', 'command', 'content', 'data', 'datalist', 'dd',
    'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em',
    'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form',
    'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header',
    'hgroup', 'hr', 'html', 'i', 'iframe', 'image', 'img', 'input', 'ins',
    'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'listing',
    'main', 'map', 'mark', 'marquee', 'math', 'menu', 'menuitem', 'meta',
    'meter', 'multicol', 'nav', 'nextid', 'nobr', 'noembed', 'noframes',
    'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param',
    'picture', 'plaintext', 'pre', 'progress', 'q', 'rb', 'rbc', 'rp', 'rt',
    'rtc', 'ruby', 's', 'samp', 'script', 'section', 'select', 'shadow', 'slot',
    'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub',
    'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea',
    'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul',
    'var', 'video', 'wbr', 'xmp'
];

export default h => {
    const createTag = (tagName) => (propsOrChildren, children) => 
                        typeof propsOrChildren === "object" && !Array.isArray(propsOrChildren) 
                                    ? h(tagName, propsOrChildren, children) : h(tagName,{},propsOrChildren);
    const toExport = { TAG_NAMES, createTag };
    TAG_NAMES.forEach(n => {
        toExport[n] =  createTag(n);
    });
    // to create custom component. const Counter = component(({title}) => h1(title));
    toExport.component = fn => props => h(fn, props); 
    return toExport;
};
