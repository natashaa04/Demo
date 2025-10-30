"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import styles from "./pageBar.module.css";

export default function PageBar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

  }, []);

  // if (!mounted || pathname === "/") return ;

  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <>
    { 
      (pathname==="/") ?(<></>):(
    <div className={styles.barWrapper}>
 
      <h2 className={styles.name}>
        {pathSegments[pathSegments.length - 1]
          ?.charAt(0)
          .toUpperCase() + pathSegments[pathSegments.length - 1]?.slice(1)}
      </h2>

 
      <Breadcrumbs aria-label="breadcrumb" separator="›">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>

        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;

          return isLast ? (
            <Typography key={href} color="text.primary">
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </Typography>
          ) : (
            <Link key={href} underline="hover" color="inherit" href={href}>
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
    )
  }
  </>
  );
}
