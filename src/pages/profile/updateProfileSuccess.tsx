import { useRedirectTimer } from "../../components/utils";
import { useScrollToTop } from "../../components/utils";
import SuccessMessage from "../../components/successMessages";
import { Helmet } from "react-helmet";

function UpdateProfileSuccess() {
  useScrollToTop();
  useRedirectTimer("/", 2000);

  return (
    <>
      <Helmet>
        <title>Profile Updated Successfully - Holidaze</title>
        <meta name="description" content="Your profile has been successfully updated! Your changes have been saved, and your profile is now up to date. Continue exploring Holidaze and enjoy our seamless accommodation services." />
      </Helmet>
      <SuccessMessage title="Profile Updated" linkTo="/" />
    </>
  );
}

export default UpdateProfileSuccess;
