import { ContainerGiphyTrend } from "../../components/Containers/ContainerGiphy/ContainerGiphyTrend";
import { ContainerCategory } from "../../components/Containers/ContainerCategory/ContainerCategory";
import { HeaderHome } from "../../components/UI/HeaderHome/HeaderHome";

export const HomePage = () => {
  return (
    <>
      <HeaderHome />
      <ContainerCategory />
      <ContainerGiphyTrend />
    </>
  );
};
