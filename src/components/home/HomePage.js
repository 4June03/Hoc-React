import videoHomePage from "../../assets/hero.mp4";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <video autoPlay loop muted width={"500"} height={"500"}>
        <source src={videoHomePage} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default HomePage;
