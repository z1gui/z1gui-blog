import slateConfig from '~@/slate.config';

export interface FooterProps {
  copyright?: string;
}

const Footer = (props: FooterProps) => {
  const { copyright = slateConfig.footer?.copyright } = props;

  return (
    <footer className="mt-auto flex items-center justify-between pt-6">
      <div className="text-sm text-slate8">{copyright}</div>
    </footer>
  );
};

export default Footer;
