"use client";

import { errorCatch } from "@/utils/errorCatch";
import styles from "./SettingsPage.module.scss";
import { UserService } from "@/services/user/user.service";
import { signOut, useSession } from "next-auth/react";
import cn from 'clsx';
import { useRouter } from "next/navigation";
import { Checkbox } from "../UI/Checkbox/Checkbox";

export const SettingsPage = () => {
  const { data: session }  = useSession();
  const router = useRouter();
    
  const onDelete = async() => {
    try {
        const response = await UserService.deleteAccount((session?.user as any)?.id, (session?.user as any)?.backendTokens.accessToken);
        signOut();
        router.push("/");
    } catch(err) {
        console.log(errorCatch(err));
    }
  }

  const onToggleNotifications = async() => {

  }
    
  return (
    <div className={styles.container}>
        <h1>Settings</h1>
        <div className={styles.list}>
            <div className={styles.notifications}>
                <p>Notifications:</p>
                <Checkbox />
            </div>
            <button className={cn(styles.btn, styles["delete-btn"])}>Delete my account</button>
        </div>
    </div>
  )
}