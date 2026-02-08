import PracticeBanner from "../../component/PracticeBanner/PracticeBanner";
import PracticeLanding from "../../component/PracticeLanding/PracticeLanding";
import { civilPracticeData } from "@/app/data/practice/civil";

export default function CivilPage() {
  return ( <div>
      <PracticeBanner {...civilPracticeData.banner}/>
      <PracticeLanding {...civilPracticeData} />
    </div>);
}
