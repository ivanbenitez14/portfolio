
interface SocialButtonProps {
  icon: string;
  label: string;
  href: string;
}

export const SocialButton = ({ icon, label, href }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-btn"
    >
      <i className={`primary-color ${icon}`}></i>
      <span className="secondary-color text-lg font-semibold">{label}</span>
    </a>
  );
};
