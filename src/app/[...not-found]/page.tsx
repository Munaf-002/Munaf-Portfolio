import Error from "@/components/error";
import Wrapper from "@/layouts/Wrapper";

 
 
export const metadata = {
  title: "404 error || Asified By AK",
};
const index = () => {
  return (
    <Wrapper>
      <Error />
    </Wrapper>
  );
};

export default index;