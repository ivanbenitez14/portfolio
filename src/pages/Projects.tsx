import { NavBar } from "../components/NavBar";
import { ProjectCard } from "../components/ProjectCard";
import miMascota from "../assets/miMascota.png";
import universoMascota from "../assets/universoMascota.png";
import bienesRaices from "../assets/bienesRaices.png";
import { LanguageButton } from "../components/LanguageButton";
import { useLanguage } from "../context/LanguageContext";

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <div>
      <div className="flex justify-end">
        <LanguageButton />
      </div>

      <NavBar />

      <div className="flex flex-col gap-10 mt-10">
        <h2 className="text-3xl primary-color"> {t("projectsIntro")} </h2>

        <div className="flex flex-col justify-center gap-10 md:flex-row">
          <ProjectCard
            src={miMascota}
            label={t("visitBtn")}
            href="https://www.mi-mascota.ar/"
          />

          <ProjectCard
            src={universoMascota}
            label={t("visitBtn")}
            href="https://www.universomimascota.com.ar/"
          />

          <ProjectCard
            src={bienesRaices}
            label={t("visitBtn")}
            href="https://www.martasoloneskibienesraices.com.ar/"
          />
        </div>
      </div>
    </div>
  );
};
