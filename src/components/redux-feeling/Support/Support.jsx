import Survey from "../Survey/Survey";

export default function Support() {
  return (
    <Survey
      SCREAMER={"SET_SUPPORT"}
      nextUrl={"/feedback/comments"}
      label={"Support?"}
      Question={"How well are you being supported?"}
      backUrl={"/feedback/understanding"}
    />
  );
}
