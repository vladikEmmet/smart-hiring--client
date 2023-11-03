"use client"

import React, { useEffect, useState } from 'react';
import styles from "./Checkbox.module.scss";
import cn from 'clsx';

export const Checkbox = () => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("notifications")) {
        setIsOn(!!localStorage.getItem("notifications"));
    }
  }, [])

  const toggleSwitch = () => {
    if(isOn) {
        localStorage.setItem("notifications", "false");
        setIsOn(false);
    } else {
        localStorage.setItem("notifications", "true");
        setIsOn(true);
    }
  };

  return (
    <>
        <div
            className={cn(styles["switch-btn"], {
                [styles["switch-on"]]: isOn,
            })}
            onClick={toggleSwitch}
        />
        <div 
            className={cn(styles["bl-element"], {
                [styles["bl-hide"]]: isOn,
            })}
        />
    </>
  );
};