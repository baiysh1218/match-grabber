import Header from "@/components/layout/header/header";
import MatchList from "@/components/matches/matchList";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <MatchList />
    </div>
  );
}
