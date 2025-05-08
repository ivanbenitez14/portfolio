interface SiteButtonProps {
  src: string;
  label: string;
  href: string;
}

export const ProjectCard = ({ src, label, href }: SiteButtonProps) => {
  return (
    <div className="project-card lg:w-72">
      <img
        src={src}
        alt="Profile picture"
        className="rounded-lg w-100 h-75 md:h-50"
      />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn hover:bg-[#00fff7]"
      >
        <span className="secondary-color text-lg font-semibold">{label}</span>
      </a>
    </div>
  );
};
