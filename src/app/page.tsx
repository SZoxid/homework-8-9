import Image from "next/image";
import LineChart from "../app/components/LineChart/LineChart"
import Sicks from "../app/components/Sicks/Sicks"

export default function Home() {
  return (
    <div className="flex">
      <Sicks/>
      <LineChart/>
    </div>
  );
}
