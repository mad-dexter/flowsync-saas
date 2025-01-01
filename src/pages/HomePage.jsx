import FeaturedIn from "../components/FeaturedIn";
import Features from "../components/Features";
import FollowUp from "../components/FollowUp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Pricing from "../components/Pricing";
import ProblemStatement from "../components/ProblemStatement";
import SocialProof from "../components/SocialProof";
import UserForm from "../components/UserForm";

function HomePage() {
  return (
    <div className="w-full font-body">
      <Navigation />
      <Header />
      <main>
        <FeaturedIn />
        <ProblemStatement />
        <Features />
        <SocialProof />
        <Pricing />
        <UserForm />
        <FollowUp />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
