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

import LeadingSection from "../Components/MainPage/LeadingSection";
import ImgSectionLeading from "../Components/MainPage/ImgSectionLeading";
import DownoloadSection from "../Components/MainPage/DownoloadSection";
import CustomerSection from "../Components/MainPage/CustomerSection";
import TitleCusomerSection from "../Components/MainPage/TitleCusomerSection";
import ContainerUser from "../Components/MainPage/ContainerUser";
import BoxDot from "../Components/MainPage/BoxDot";
import ArticleSection from "../Components/MainPage/ArticleSection";
import ArticleContainer from "../Components/MainPage/ArticleContainer";
import Footer from "../Components/BasicComponents/Footer/Footer";
import InfoCompanyFooter from "../Components/BasicComponents/Footer/InfoCompanyFooter";
import InfoListFooter from "../Components/BasicComponents/Footer/InfoListFooter";
function MainPage() {
  const textService =
    " We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health";
  const textLeading =
    "Medicine provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver";
  const textDownoload =
    "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely";
  return (
    <>
      <div className=" w-[90%]  md:container mx-auto">
        <Header>
          <TitlePage bgColor="blue" logoTitle="white" />
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
          <ButtonSection textBtn="Learn More" />
        </ServiceSection>
        <LeadingSection>
          <ImgSectionLeading path={"/images/illustration(2).png"} />
          <div className="flex flex-col items-center justify-center w-[100%] md:w-3/6 ">
            <TitleSection title="Leading healthcare providers" />
            <TextServiceSection text={textLeading} />
            <ButtonSection textBtn="Learn More" />
          </div>
        </LeadingSection>
        <DownoloadSection>
          <div className="flex flex-col items-center justify-center w-[100%] md:w-3/6 ">
            <TitleSection title="Downoload our mobile apps" />
            <TextServiceSection text={textDownoload} />
            <ButtonSection textBtn="Downoload" />
          </div>
          <ImgSectionLeading path={"/images/illustration(3).png"} />
        </DownoloadSection>
        <CustomerSection>
          <TitleCusomerSection />
          <ContainerUser />
        </CustomerSection>
        <BoxDot />
        <ArticleSection>
          <TitleSection title="Check out our latest article" />
          <ArticleContainer />
          <div className="flex items-center justify-center">
            <ButtonSection textBtn="View all" />
          </div>
        </ArticleSection>
      </div>
      <Footer>
        <div className="flex flex-col md:flex-row pt-10 pl-10 pr-5  justify-center md:justify-around">
          <InfoCompanyFooter />
          <InfoListFooter
            title="Company"
            itemOne="About"
            itemTwo="Testimonials"
            itemThree="Find a doctor"
            itemFour="Apps"
          />
          <InfoListFooter
            title="Region"
            itemOne="Poland"
            itemTwo="Germany"
            itemThree="France"
            itemFour="Spain"
          />
          <InfoListFooter
            title="Help"
            itemOne="Help Center"
            itemTwo="Contact support"
            itemThree="Instructions"
            itemFour="How it works"
          />
        </div>
      </Footer>
    </>
  );
}

export default MainPage;
