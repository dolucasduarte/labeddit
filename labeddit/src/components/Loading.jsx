import { LoadingContainer } from "../styles/components/loading";
import loadingIcon from "../images/logo-icon.svg";

function Loading() {
  return (
    <LoadingContainer>
      <img src={loadingIcon} alt="Loading" />
      <span>Loading posts</span>
    </LoadingContainer>
  );
}

export default Loading;
