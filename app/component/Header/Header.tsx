import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className="text-black ">
      <div className="flex items-center justify-between m-2">
        <div className={styles.logo_main}>
          <Link href="/">
            <Image
              src="/images/avyukt_logo.png"
              alt="Logo"
              width={70}
              height={70}
              priority
            />
          </Link>
        </div>

        <div className="navigation">
          <div>
            <ul className="flex gap-[20px]">
              <li><Link rel="stylesheet" href="/" >Home</Link></li>
              <li><Link rel="stylesheet" href="/">About Us</Link></li>
              <li><Link rel="stylesheet" href="/">Our Practice</Link></li>
              <li><Link rel="stylesheet" href="/">Contact Us</Link></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
