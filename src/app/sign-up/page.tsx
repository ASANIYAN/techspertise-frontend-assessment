import Image from "next/image";
import signup_img from "../../../public/assets/images/signup-img.png";

const SignUp = () => {
  return (
    <section className="flex">
      <section className="w-4/5">
        <Image src={signup_img} className="h-full" alt="signup-img" />
      </section>
    </section>
  );
};

export default SignUp;
