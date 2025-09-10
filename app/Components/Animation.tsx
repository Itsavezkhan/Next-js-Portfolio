import { useEffect } from "react";
import Lottie from "lottie-react";
import crashAnim from "../../public/Error 404.json"; // adjust path to your JSON

type IntroProps = {
  onFinish: () => void;
};

export default function Animation({ onFinish }: IntroProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-2xl md:text-4xl font-bold text-black mb-4">
        Tired of crashy, slow websites?
      </h1>
      <div className="w-72 h-72">
        <Lottie animationData={crashAnim} loop={true} />
      </div>
    </div>
  );
}
