import { FormMeme } from "../../components/Forms/FormMeme/FormMeme";
import { ContainerLikes } from "../../components/Containers/ContainerLikes/ContainerLikes";
import { ContainerCreateByUser } from "../../components/Containers/ContainerCreateByUser/ContainerCreateByUser";

export const ProfileUserPage = () => {
  return (
    <div>
      <ContainerCreateByUser />
      <FormMeme />
      <ContainerLikes />
    </div>
  );
};
