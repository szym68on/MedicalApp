import Header from "../Components/BasicComponents/Header";
import TitlePage from "../Components/BasicComponents/TitlePage";
import NavMenu from "../Components/BasicComponents/NavMenu";
import MainSection from "../Components/MainPage/MainSection";
import InfoMainSection from "../Components/MainPage/InfoMainSection";
import ImageMainSection from "../Components/MainPage/ImageMainSection";
import ServiceSection from "../Components/MainPage/ServiceSection";
import TitleSection from "../Components/MainPage/TitleSection";
import TextServiceSection from "../Components/MainPage/TextServiceSection";
import ContainerElementsServices from "../Components/MainPage/ContainerElementsServices";
import ButtonSection from "../Components/MainPage/ButtonSection";
// import IconBg from "../Components/MainPage/IconBg";
import LeadingSection from "../Components/MainPage/LeadingSection";
import ImgSectionLeading from "../Components/MainPage/ImgSectionLeading";
function MainPage() {
  const textService =
    " We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health";
  const textLeading =
    "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver";
  return (
    <div className=" w-[90%]  md:container mx-auto">
      <Header>
        <TitlePage />
        <NavMenu />
      </Header>
      <MainSection>
        <InfoMainSection />
        <ImageMainSection />
      </MainSection>
      <ServiceSection>
        <TitleSection title="Our Service" />
        <TextServiceSection text={textService} />
        <ContainerElementsServices />
        <ButtonSection />
        {/* <IconBg /> */}
      </ServiceSection>
      <LeadingSection>
        <ImgSectionLeading />
        <div className="flex flex-col items-center justify-center w-[100%] md:w-3/6 ">
          <TitleSection title="Leading healthcare providers" />
          <TextServiceSection text={textLeading} />
          <ButtonSection />
        </div>
      </LeadingSection>
    </div>
  );
}

export default MainPage;
