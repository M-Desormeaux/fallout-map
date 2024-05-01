import dynamic from "next/dynamic";
import Image from "next/image";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  return (
    <>
      <Map />
      {/* <Image
        src="/Vault-Tec.png"
        height={50}
        width={100}
        alt="Vault-Tec Logo"
      /> */}
    </>
  );
}
