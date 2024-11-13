import htmlToText from '@/services/htmlToText';

const useHtmlToText = () => {
  const convert = (html: string) => htmlToText.convertHtmlToText(html);

  return { convert };
};

export default useHtmlToText;
