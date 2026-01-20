import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className=" sticky top-0" className={styles.header} >
      <div className="text-black ">
        <div className="flex items-center justify-between ">
          <div className={styles.logo_main}>
            <Link href="/">
              <Image
                src="/images/avyukt_logo.png"
                alt="Logo"
                width={60}
                height={60}
                priority
              />
            </Link>
          </div>

          <div className="navigation text-white  mr-20 ">
            <div>
              <ul className="flex gap-[50px] text-[18px]">
                <li>
                  <Link rel="stylesheet" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link rel="stylesheet" href="/About">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link rel="stylesheet" href="/">
                    Our Practice
                  </Link>
                </li>
                <li>
                  <Link rel="stylesheet" href="/">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
