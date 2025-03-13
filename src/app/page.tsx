import Header from "@/components/layout/header/header";
import Loader from "@/components/loader/loader";
import MatchList from "@/components/matches/matchList";
import { Suspense } from "react";

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
