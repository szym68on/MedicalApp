import Header from "../Components/BasicComponents/Header";
import TitlePage from "../Components/BasicComponents/TitlePage";
import NavMenu from "../Components/BasicComponents/NavMenu";
function MainPage() {
  return (
    <div className="container mx-auto">
      <Header>
        <TitlePage />
        <NavMenu />
      </Header>
    </div>
  );
}

export default MainPage;