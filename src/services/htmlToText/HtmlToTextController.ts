import { convert, HtmlToTextOptions } from 'html-to-text';

const _options: HtmlToTextOptions = {
  wordwrap: 130,
  selectors: [{ selector: 'img', format: 'skip' }],
};

export const convertHtmlToText = (html: string) => {
  return convert(html, _options);
};
