import PracticeBanner from "../../component/PracticeBanner/PracticeBanner";
import PracticeLanding from "../../component/PracticeLanding/PracticeLanding";
import { consumerPracticeData } from "@/app/data/practice/consumer";

export default function CriminalPage() {
  return (
    <div>
      <PracticeBanner {...consumerPracticeData.banner} />
      <PracticeLanding {...consumerPracticeData} />
    </div>
  );
}
