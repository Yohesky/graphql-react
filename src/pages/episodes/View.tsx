import { Card } from "../../shared/components/Card";
import { HeaderTitle } from "../../shared/components/HeaderTitle";
import { Description } from "./components/Description";
import { Title } from "./components/Title";

export const View = () => {
  return (
    <div className="flex flex-col gap-y-2 col-span-full">
      <HeaderTitle label="Episodes" />
      {Array.from({ length: 10 }).map((_, index) => (
        <Card
          href="#"
          key={index}
          image="https://i.pinimg.com/736x/c4/f7/1c/c4f71c964d9f8b855670b311af615c70.jpg"
          extraChildren={
            <Description description={`Description for Episode - ${index}`} />
          }
        >
          <Title title={`Episode - ${index}`} />
        </Card>
      ))}
    </div>
  );
};
