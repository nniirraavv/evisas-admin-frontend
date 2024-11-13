import Turndown from 'turndown';

// Create a singleton for Turndown service
let _instance: Turndown;
const getHtmlToMarkdownInstance = () => {
  if (_instance) return _instance;
  _instance = new Turndown();
  _instance.remove('button');
  return _instance;
};

export const convertHtmlToMarkdown = (html: string | Turndown.Node) => {
  const instance = getHtmlToMarkdownInstance();
  const markDown = instance.turndown(html);
  const plainText = markDown.replace(/(\*\*|\*)/g, ''); // Remove Markdown formatting
  return plainText;
};
