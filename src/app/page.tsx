import { Suspense } from "react";
import Header from "../components/layout/header/header";
import MatchList from "../components/matches/matchList";
import Loader from "../components/loader/loader";

export default function Home() {
  return (
    <div className="container">
      <Suspense fallback={<Loader />}>
        <Header />
        <MatchList />
      </Suspense>
    </div>
  );
}
