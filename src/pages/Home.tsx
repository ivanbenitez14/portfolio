import { NavBar } from "../components/NavBar";
import { SocialButton } from "../components/SocialButton";
import me from "../assets/me.jpg";
import { LanguageButton } from "../components/LanguageButton";
import { useLanguage } from "../context/LanguageContext";

export const Home = () => {
  const { t } = useLanguage();

  return (
    <div>
      <div className="flex justify-end">
        <LanguageButton />
      </div>

      <NavBar />

      <div className="md:flex md:items-center">
        <div className="flex flex-col items-center order-1 md:order-2">
          <div className="relative inline-block my-10 w-3/4 h-3/4">
            <div className="absolute -top-4 -right-4 w-full h-full profile-border rounded-2xl z-0"></div>
            <img
              src={me}
              alt="Profile picture"
              className="relative z-10 rounded-2xl"
            />
          </div>
        </div>

        <div className="order-2 md:order-1 md:flex-col">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl primary-color">{t("intro")}</h2>
            <h3 className="secondary-color">{t("aboutMe")}</h3>
          </div>

          <div className="flex flex-col items-center mt-10 gap-8">
            <span className="text-3xl secondary-color">{t("socialBtn")}</span>
            <SocialButton
              icon="bi bi-github"
              label="GitHub"
              href="https://github.com/ivanbenitez14"
            />
            <SocialButton
              icon="bi bi-linkedin"
              label="Linkedin"
              href="https://linkedin.com/in/iván-benítez"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
