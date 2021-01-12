import { LoadingContainer } from "./Loading.style";
import loadingIcon from "images/logo-icon.svg";

function Loading() {
  return (
    <LoadingContainer>
      <img src={loadingIcon} alt="Loading" />
    </LoadingContainer>
  );
}

export default Loading;
