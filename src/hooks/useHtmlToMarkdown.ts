import htmlToMarkdown from '@/services/htmlToMarkdown';
import TurndownService from 'turndown';

const useHtmlToMarkdown = () => {
  const convert = (html: string | TurndownService.Node) =>
    htmlToMarkdown.convertHtmlToMarkdown(html);

  return { convert };
};

export default useHtmlToMarkdown;
