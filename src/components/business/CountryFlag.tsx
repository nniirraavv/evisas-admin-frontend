import { FC } from 'react';

interface Props {
  countryCode: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  title?: string;
}
const CountryFlag: FC<Props> = ({ countryCode, width, height, alt, title }) => {
  return (
    <img
      width={width ?? 24}
      height={height ?? 24}
      alt={alt ?? 'country flag'}
      title={title}
      src={`http://purecatamphetamine.github.io/country-flag-icons/1x1/${countryCode}.svg`}
    />
  );
};

export default CountryFlag;
