import HomeBannerVideos from "./home-banner-videos";
import MainTabs from "./main-tabs";
const HomePage = () => {
  return (
    <main
      style={{
        marginBottom: "50px",
      }}
    >
      <HomeBannerVideos />
      <MainTabs />
    </main>
  );
};

export default HomePage;
